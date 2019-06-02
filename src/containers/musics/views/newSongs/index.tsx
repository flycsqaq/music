import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getNewSongs } from '../../store/actions/new';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Song } from '../../models/state';
import SongShow from '../../shared/songShow';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    IconButton: {
      float: 'right',
      transform: 'rotate(90deg)'
    }
  })
)

export default () => {
  const classes = useStyles({})
  const mapState = useCallback(
    state => state.new.newSongs, []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getNewSongs())
    }, []
  )
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item>
        <Typography variant="h5" component="h1">新歌榜</Typography>
        <Grid container spacing={3}>
          {state.map((song: Song, index: number) => {
              return (
                <Grid key={song.hash} item xs={4}>
                  <SongShow song={song} />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  )
}