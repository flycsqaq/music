import { RouterType } from "../models/router";
import { lazy } from "react";

const baseRouter = '/music'

const Home = lazy(() => import('../views/Home'))
const New = lazy(() => import('../views/newSongs'))
const MenuList = lazy(() => import('../views/menuList'))
const MenuSongs = lazy(() => import('../views/menuSongs'))
const SongRankList = lazy(() => import('../views/songRankList'))
const SongRankSongs = lazy(() => import('../views/songRankSongs'))
const SingerClasses = lazy(() => import('../views/singerClasses'))
const SingerList = lazy(() => import('../views/singerList'))
const SingerSongs = lazy(() => import('../views/singerSongs'))
const SongInfo = lazy(() => import('../views/songInfo'))
const musicRouter: RouterType[] = [
  {
    path: `${baseRouter}`,
    component: Home
  },
  {
    path: `${baseRouter}/new`,
    component: New
  },
  {
    path: `${baseRouter}/menuList`,
    component: MenuList
  },
  {
    path: `${baseRouter}/menu/:id`,
    component: MenuSongs
  },
  {
    path: `${baseRouter}/songRankList`,
    component: SongRankList
  },
  {
    path: `${baseRouter}/songRank/:id`,
    component: SongRankSongs
  },
  {
    path: `${baseRouter}/singerClasses`,
    component: SingerClasses
  },
  {
    path: `${baseRouter}/singerList/:id`,
    component: SingerList
  },
  {
    path: `${baseRouter}/singer/:id`,
    component: SingerSongs
  },
  {
    path: `${baseRouter}/song/:hash`,
    component: SongInfo
  }
]

export default musicRouter