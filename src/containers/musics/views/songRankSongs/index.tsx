import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getRankSongs } from '../../store/actions/rank';
import SongShow from '../../shared/songShow';
import { Grid } from '@material-ui/core';
import { Song } from '../../models/state';

export default (props: any) => {
  const mapState = useCallback(
    state => state.rank.rankSongs[props.match.params.id], [props.match.params.id]
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getRankSongs(props.match.params.id))
    }, []
  )
  function Songs() {
    if (state) {
      if (state.length === 0) return (<div>none</div>)
      return (
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
      )
    }
    return (
      <div>loading</div>
    )
  }
  return (
    <Songs />
  )
}