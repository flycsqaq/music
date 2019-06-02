import React, { useEffect, useCallback } from 'react'
import { Song } from '../models/state';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useMappedState } from 'redux-react-hook'
import { getSongInfo } from '../store/actions/song';
import { push } from '../../../core/store/history'
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { addCollectionSong } from '../store/actions/collection';
import { changePlayList } from '../store/actions/playList';
interface Props {
  song: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
      height: '100%'
    },
  }),
);

const SongShow = ({ song }: Props) => {
  const classes = useStyles({});
  const mapState = useCallback(
    state => ({
      play: state.play,
      musicCollection: state.musicCollection,
      menuCollection: state.menuCollection,
    }), []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()

  function playSong(e: any) {
    const { playList, tag } = state.play
    dispatch(addCollectionSong(playList, song.hash))
    dispatch(changePlayList(playList, song.hash, tag, true))
    e.stopPropagation()
  }

  return (
    <Paper className={classes.root} onClick={() => push(`/music/song/${song.hash}`)}>
      <Typography component="p">
        {song.filename}
      </Typography>
      <IconButton onClick={(e: any) => playSong(e)}>
        <PlayArrowIcon />
      </IconButton>
    </Paper>
  );
}

export default SongShow;
