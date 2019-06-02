import React, { useCallback, useEffect, useState, useRef } from 'react';
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
import { useStyles, StyledSlider } from './styles/media'
import { useTheme } from '@material-ui/core/styles';

function MediaControlCard() {
  const classes = useStyles({})
  const theme = useTheme();
  const myRef = useRef({} as any);

  const mapState = useCallback(
    state => ({
      play: state.play,
      songInfo: state.song.songInfo,
      hash: state.play.hash
    }), []
  )

  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  let id = -1
  
  function pause() {
    if (!myRef.current.paused) {
      console.log('pause')
      clearInterval(id)
      myRef.current.pause()
      const { playList, tag } = state.play
      dispatch(changePlayList(playList, state.hash, tag, false))
    }
  }
  function play() {
    if (myRef.current.paused) {
      clearInterval(id)
      myRef.current.play()
      changeTimes()
      const { playList, tag } = state.play
      id = setInterval(changeTimes, 1000)
      dispatch(changePlayList(playList, state.hash, tag, true))
    }
  }
  function clearTimes() {
    if (id > -1) {
      clearInterval(id)
    }
  }
  function canPlay() {
    if (state.play.state) {
      play()
    }
  }
  function fastSeek(time: any) {
    if (time >=0 && time <= myRef.current.duration) {
      myRef.current.currentTime = time
    }
  }

  const [url, changeUrl] = useState('')
  useEffect(
    () => {
      const { hash } = state.play
      const info = state.songInfo
      if (info && info[hash]) {
        if (url !==info[hash].url) {
          changeUrl(info[hash].url)
        }
      }
    }, [state.hash, state.songInfo]
  )
  function Content() {
    const { hash } = state.play
    const info = state.songInfo
    if (info && info[hash]) {
      return (
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.pag}>
            {info[hash].songName || '资料获取中'}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.pag}>
          {info[hash].singerName || '资料获取中'}
          </Typography>
        </CardContent>
      )
    }
    return (
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5" className={classes.pag}>
          请选择歌曲
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={classes.pag}>
          请选择歌曲
        </Typography>
      </CardContent>
    )
  }

  function Image() {
    const { hash } = state.play
    const info = state.songInfo
    if (info[hash] && info[hash].imgUrl) {
      return (
        <CardMedia
          className={classes.cover}
          image={changeImgUrl(info[hash].imgUrl)}
        />
      )
    }
    return (
      <CardMedia
        className={classes.cover}
        image={musicPic}
      />
    )
  }

  const [[currentTime, duration], changeTime] = useState([0, 0])
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    changeTime([newValue, duration]);
    fastSeek(newValue)
  }
  function changeTimes() {
    const audio = myRef.current
    if (audio && audio.currentTime !== undefined && audio.duration !== undefined) {
      changeTime([audio.currentTime, audio.duration])
    }
  }
  return (
    <Card className={classes.card}>
      <GetSongs />
      <audio onCanPlay={canPlay} ref={myRef} src={url} />
      <div className={classes.details}>
        <Content />
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          {state.hash ?
            state.play.state ? 
            <IconButton onClick={pause}>
              <PauseIcon className={classes.playIcon} />
            </IconButton> :
            <IconButton onClick={play}>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton> : 
            <IconButton disabled>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          }
          <IconButton aria-label="Next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
        <Paper className={classes.slider}>
          <StyledSlider value={currentTime} max={duration} aria-labelledby="label" onChange={handleChange} />
          <Typography component="h5" variant="h5">
            <span>{currentTime.toFixed(0)}</span>
            <span className={classes.floatRight}>{duration.toFixed(0)}</span>
          </Typography>
        </Paper>
      </div>
      <Image />
    </Card>
  );
}

export default MediaControlCard;