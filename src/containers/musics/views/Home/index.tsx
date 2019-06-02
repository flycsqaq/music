import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getSingerClasses } from '../../store/actions/singer';
import { getNewSongs } from '../../store/actions/new';
import { getMenuList } from '../../store/actions/menu';
import { getRankList } from '../../store/actions/rank';
import SongShow from '../../shared/songShow';
import { Song, MenuInfo, RankInfo, SingerClasses } from '../../models/state';
import MenuShow from '../../shared/menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SongRank from '../../shared/songRank';
import SingerClass from '../../shared/singerClass';
import MoreIcon from '@material-ui/icons/MoreVertRounded';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'

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
    state => ({
      newSongs: state.new.newSongs,
      menuList: state.menu.menuList,
      rankList: state.rank.rankList,
      singerClasses: state.singer.singerClasses,
      router: state.router
    }), []
  )
  const state = useMappedState(mapState)
  
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getNewSongs())
      dispatch(getMenuList())
      dispatch(getRankList())
      dispatch(getSingerClasses())
    }, []
  )

  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item>
        <Typography variant="h5" component="h1">新歌榜</Typography>
        <Grid container spacing={3}>
          {state.newSongs.map((song: Song, index: number) => {
            if (index < 9) {
              return (
                <Grid key={song.hash} item xs={4}>
                  <SongShow song={song} />
                </Grid>
              )
            }
            return null
          })
          }
        </Grid>
        <Link to="/music/new" >
          <IconButton className={classes.IconButton}>
            <MoreIcon />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h1">歌单</Typography>
        <Grid container spacing={3}>
          {state.menuList.map((menu: MenuInfo, index: number) => {
            if (index < 6) {
              return (
                <Grid key={index} item xs={4}>
                  <MenuShow imgurl={menu.imgurl} specialid={menu.specialid} specialname={menu.specialname} intro={menu.intro} songs={menu.songs} />
                </Grid>
              )
            }
            return null
          })}
        </Grid>
        <Link to="/music/menuList">
          <IconButton className={classes.IconButton}>
            <MoreIcon />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h1">歌曲排行榜</Typography>
        <Grid container spacing={3}>
          {state.rankList.map((rank: RankInfo, index: number) => {
            if (index < 6) {
              return (
                <Grid key={index} item xs={4}>
                  <SongRank rankid={rank.rankid} imgurl={rank.imgurl} rankname={rank.rankname} />
                </Grid>
              )
            }
            return null
          })}
        </Grid>
        <Link to="/music/songRankList">
          <IconButton className={classes.IconButton}>
            <MoreIcon />
          </IconButton>
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h1">歌手分类</Typography>
        <Grid container spacing={3}>
          {state.singerClasses.map((singerClass: SingerClasses, index: number) => {
            if (index <6) {
              return (
                <Grid key={index} item xs={4}>
                  <SingerClass classid={singerClass.classid} imgurl={singerClass.imgurl} classname={singerClass.classname}  />
                </Grid>
              )
            }
            return null
          })}
        </Grid>
        <Link to="/music/singerClasses">
          <IconButton className={classes.IconButton}>
            <MoreIcon />
          </IconButton>
        </Link>
      </Grid>
    </Grid>
  )
}