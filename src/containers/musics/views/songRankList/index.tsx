import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { RankInfo } from '../../models/state';
import { getRankList } from '../../store/actions/rank';
import SongRank from '../../shared/songRank';

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

const SongRankList = (props: any) => {
  const classes = useStyles({})
  const mapState = useCallback(
    state => state.rank.rankList, []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getRankList())
    }, []
  )
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item>
        <Typography variant="h5" component="h1">歌曲排行榜</Typography>
        <Grid container spacing={3}>
          {state.map((rank: RankInfo, index: number) => (
            <Grid key={index} item xs={4}>
              <SongRank rankid={rank.rankid} imgurl={rank.imgurl} rankname={rank.rankname} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SongRankList