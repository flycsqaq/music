import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getSingerInfo } from '../../store/actions/singer';
import SongShow from '../../shared/songShow';
import { Grid } from '../../../../../node_modules/@material-ui/core';
import { Song } from '../../models/state';

export default (props: any) => {
  const mapState = useCallback(
    state => state.singer.singerInfo[props.match.params.id], [props.match.params.id]
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getSingerInfo(props.match.params.id))
    }, []
  )
  function SingerInfo() {
    if (state) {
      return (
        <Grid container spacing={3}>
        {state.songs.list.map((song: Song, index: number) => (
          <Grid key={index} item xs={4}>
            <SongShow song={song} />
          </Grid>
        ))}
        </Grid>
      )
    }
    return (
      <div>loading</div>
    )
  }
  return (
    <SingerInfo />
  )
}