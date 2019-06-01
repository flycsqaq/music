import React, { useCallback, useEffect } from 'react';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Media from './audioSource'
import { useMappedState, useDispatch } from '../../../../node_modules/redux-react-hook';

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
  }),
);

function MediaControlCard({ img, url }: any) {

  const classes = useStyles({});
  const theme = useTheme();
  // const mapState = useCallback(
  //   state => ({
  //     current: state.play.currentMusic,
  //     list: state.play.musicList
  //   }), []
  // )
  // const state = useMappedState(mapState)

  // function Info() {
  //   if (state.current) {
  //     return (
  //       <div>
  //         {state.current.fileName}
  //       </div>
  //     )
  //   }
  //   return null
  // }
  function ImageCard() {
    if (url) {
      return (
        <div>
          <Media source={url} />
        </div>
      )
    }
    return  (
      <div>
      <Media />
    </div>
    )
  }
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
      {/* <Info /> */}
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="Previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="Play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="Next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <ImageCard />
    </Card>
  );
}

export default MediaControlCard;