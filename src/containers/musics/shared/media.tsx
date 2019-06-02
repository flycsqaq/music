import React, { useCallback, useEffect, useState } from 'react';
import { Theme, createStyles, withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useMappedState, useDispatch } from 'redux-react-hook';
import GetSongs from '../views/getSongs'
import { addCollectionSong } from '../store/actions/collection';
import { changePlayList } from '../store/actions/playList';
import musicPic from '../../../assets/music.jpg'
import { changeImgUrl } from '../utils/imgUrl';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    slider: {
      width: 300,
      padding: 24,
    },
  }),
);

const StyledSlider = withStyles({
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid #de235b',
    '&$focused, &:hover': {
      boxShadow: `0px 0px 0px ${8}px ${fade('#de235b', 0.16)}`,
    },
    '&$activated': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
    '&$jumped': {
      boxShadow: `0px 0px 0px ${8 * 1.5}px ${fade('#de235b', 0.16)}`,
    },
  },
  track: {
    backgroundColor: '#de235b',
    height: 8,
  },
  trackAfter: {
    backgroundColor: '#d0d7dc',
  },
  focused: {},
  activated: {},
  jumped: {},
})(Slider);

function MediaControlCard({ img, url }: any) {

  let myRef: any = React.createRef()
  const classes = useStyles({});
  const theme = useTheme();
  const mapState = useCallback(
    state => ({
      play: state.play,
      recently: state.recently,
      musicCollection: state.musicCollection,
      menuCollection: state.menuCollection,
      songInfo: state.song.songInfo
    }), []
  )
  const state = useMappedState(mapState)

  useEffect(
    () => {
      if (state.play.state) {
        play()
      }
      return () => pause() 
    }, [state.play.hash]
  )
  const map: any = {
    'song': state.musicCollection,
    'menu': state.menuCollection
  }
  // function Now() {
  //   const { hash } = state.play
  //   if (state.songInfo[hash] && state.songInfo[hash].url) {
  //     changeSrc(state.songInfo[hash].url)
  //   }
  //   return null
  // }
  const dispatch = useDispatch()

  function PlayListNow() {
    const { playList, tag } = state.play
    let collection: any[] = []
    if (map[tag] && map[tag][playList]) {
      collection = map[tag][playList]
    }
    function playSong(song: any) {
      const { playList, tag } = state.play
      dispatch(addCollectionSong(playList, song.hash))
      dispatch(changePlayList(playList, song.hash, tag, true))
    }
    return (
      <div>
        {collection.map((song) => (
          <div key={song.hash}>
            {song.hash}
            <button onClick={(e) => playSong(song)}>播放</button>
          </div>
        ))}
      </div>
    )
  }

  function play() {
    const audio = myRef.current
      if (audio.paused) {
        // audio.play()
        console.log('play')
      }
  }
  function Audio() {
    const { hash } = state.play
    let song: any = state.songInfo[hash]
    if (state.play.state) {
      return (
        <audio ref={myRef} src={song && song.url}>
        </audio>
      )
    }
    return (
      <audio ref={myRef} src={song && song.url}>
      </audio>
    )
  }
  function pause() {
    const audio = myRef.current
    if (audio && !audio.paused) {
      const { playList, tag, hash } = state.play
      let song: any = state.songInfo[hash]
      // audio.pause()
      console.log('pause')
    }
    console.log('pause')
  }
  function MusicState() {
    if (state.play.state) {
      return (
        <IconButton aria-label="pause" onClick={() => pause()}>
          <PauseIcon className={classes.playIcon} />
        </IconButton>
      )
    }
    return (
      <IconButton aria-label="play" onClick={() => play()}>
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
    )
  }
  function Image() {
    const { hash } = state.play
    let src: any = musicPic
    if (state.songInfo[hash] && state.songInfo[hash].imgUrl) {
      src = changeImgUrl(state.songInfo[hash].imgUrl)
    }
    return (
      <CardMedia
        className={classes.cover}
        image={src}
      />
    )
  }
  const [value, setValue] = React.useState(50);
  function changeCache() {
    let id = -1
    return (event: React.ChangeEvent<{}>, newValue: number) => {
      clearTimeout(id)
      if (event.type === 'mousemove') {
        id = setTimeout(setValue(newValue), 5000)
      } else {
        setValue(newValue)
      }
    }
  }
  const handleChange = changeCache()
  // function Slide() {
  //   return (
  //     <Paper className={classes.slider}>
  //       <StyledSlider value={value} aria-labelledby="label" onChange={handleChange} />
  //     </Paper>
  //   );
  // }
  function Render() {
    const { hash } = state.play
    let song: any = state.songInfo[hash]
    function Info() {
      if (song) {
        return (
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {song.songName}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {song.singerName}
            </Typography>
          </CardContent>
        )
      }
      return (
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            暂无歌曲
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            暂无歌曲
          </Typography>
        </CardContent>
      )
    }
    return (
      <Card className={classes.card}>
        {/* <PlayListNow /> */}
        {/* <MusicTime /> */}
        {/* <Time /> */}
        <Paper className={classes.slider}>
          <StyledSlider value={value} aria-labelledby="label" onChange={handleChange} />
        </Paper>
        <GetSongs />
        {/* <Now /> */}
        <div className={classes.details}>
          <Info />
          <div className={classes.controls}>
            <IconButton aria-label="Previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <MusicState />
            <IconButton aria-label="Next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
            {/* <button onClick={musicTime}>+</button> */}
          </div>
        </div>
        <Image />
        <Audio />
      </Card>
    )
  }
  return (
    Render()
  );
}

export default MediaControlCard;