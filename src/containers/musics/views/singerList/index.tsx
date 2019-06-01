import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import SingerShow from '../../shared/singerShow';
import { Grid } from '../../../../../node_modules/@material-ui/core';
import { SingerClassSingerInfo } from '../../models/state';
import { getSingerClassSingerList } from '../../store/actions/singer';

export default (props: any) => {
  const mapState = useCallback(
    state => state.singer.singerClassSingerList[props.match.params.id], [props.match.params.id]
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getSingerClassSingerList(props.match.params.id))
    }, []
  )
  function SingerList() {
    if (state) {
      return (
        <Grid container spacing={3}>
          {state.map((singer: SingerClassSingerInfo) => (
            <Grid key={singer.singerid} item xs={4}>
              <SingerShow singername={singer.singername} singerid={singer.singerid} imgurl={singer.imgurl} />
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
    <SingerList />
  )
}