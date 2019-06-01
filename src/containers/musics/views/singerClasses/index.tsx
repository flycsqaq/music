import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '../../../../../node_modules/@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { SingerClasses } from '../../models/state';
import { getSingerClasses } from '../../store/actions/singer';
import SingerClass from '../../shared/singerClass';

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

export default (props: any) => {
  const classes = useStyles({})
  const mapState = useCallback(
    state => state.singer.singerClasses, []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getSingerClasses())
    }, []
  )
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item>
        <Typography variant="h5" component="h1">歌手分类</Typography>
        <Grid container spacing={3}>
          {state.map((singerClass: SingerClasses, index: number) => (
            <Grid key={index} item xs={4}>
              <SingerClass classid={singerClass.classid} imgurl={singerClass.imgurl} classname={singerClass.classname}  />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}
