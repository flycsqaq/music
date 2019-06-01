import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid } from '../../../../../node_modules/@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { getMenuList } from '../../store/actions/menu';
import MenuShow from '../../shared/menu';
import { MenuInfo } from '../../models/state';

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

const MenuList = (props: any) => {
  const classes = useStyles({})
  const mapState = useCallback(
    state => state.menu.menuList, []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getMenuList())
    }, []
  )
  return (
    <Grid container className={classes.root} spacing={5}>
      <Grid item>
        <Typography variant="h5" component="h1">歌单</Typography>
        <Grid container spacing={3}>
          {state.map((menu: MenuInfo, index: number) => (
              <Grid key={index} item xs={4}>
                <MenuShow specialid={menu.specialid} imgurl={menu.imgurl} specialname={menu.specialname} intro={menu.intro} songs={menu.songs} />
              </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MenuList