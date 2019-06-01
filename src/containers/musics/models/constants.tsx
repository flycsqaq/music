import { SingerInfo, SongInfo, SongList } from "./state";

export const GET_NEW_SONGS = 'GET_NEW_SONGS'
export type GET_NEW_SONGS = typeof GET_NEW_SONGS

export const GET_MENU_LIST = 'GET_MENU_LIST'
export type GET_MENU_LIST = typeof GET_MENU_LIST

export const GET_MENU_SONGS = 'GET_MENU_SONGS'
export type GET_MENU_SONGS = typeof GET_MENU_SONGS

export const GET_RANK_LIST = 'GET_RANK_LIST'
export type GET_RANK_LIST = typeof GET_RANK_LIST

export const GET_RANK_SONGS = 'GET_RANK_SONGS'
export type GET_RANK_SONGS = typeof GET_RANK_SONGS

export const GET_SINGER_CLASSES = 'GET_SINGER_CLASSES'
export type GET_SINGER_CLASSES = typeof GET_SINGER_CLASSES

export const GET_SINGER_CLASS_SINGER_LIST = 'GET_SINGER_CLASS_SINGER_LIST'
export type GET_SINGER_CLASS_SINGER_LIST = typeof GET_SINGER_CLASS_SINGER_LIST

export const GET_SINGER_INFO = 'GET_SINGER_INFO'
export type GET_SINGER_INFO = typeof GET_SINGER_INFO

export const GET_SONG_INFO = 'GET_SONG_INFO'
export type GET_SONG_INFO = typeof GET_SONG_INFO

export const GET_SONG_LRC = 'GET_SONG_LRC'
export type GET_SONG_LRC = typeof GET_SONG_LRC

export const SEARCH_SONGS = 'SEARCH_SONGS'
export type SEARCH_SONGS = typeof SEARCH_SONGS

export type SongType = GET_NEW_SONGS | GET_MENU_LIST | GET_MENU_SONGS | GET_RANK_LIST | GET_RANK_SONGS | 
                       GET_SINGER_CLASSES | GET_SINGER_CLASS_SINGER_LIST | GET_SINGER_INFO | GET_SONG_INFO | GET_SONG_LRC | 
                       SEARCH_SONGS     

export const songListExample: SongList = {
  list: {
    info: []
  },
  page: 0,
  pagesize: 0
}

export const SingerInfoExample: SingerInfo = {
  info: {
    identity: 0,
    intro: '',
    songcount: 0,
    imgurl: '',
    singerid: 0,
    albumcount: 0,
    singername: '',
    profile: '',
  },
  songs: {
    total: 0,
    pagesize: 0,
    list: []
  }
}

export const SongInfoExample: SongInfo = {
  extra: {
    "320filesize": 0,
    "sqfilesize": 0,
    "sqhash": '',
    "128hash": '',
    "320hash": '',
    "128filesize": 0
  },
  fileSize: 0,
  choricSinger: '',
  "album_img": '',
  "topic_remark": '',
  url: '',
  time: 0,
  singerName: 0,
  songName: '',
  extName: '',
  singerHead: '',
  imgUrl: '',
  error: '',
  hash: '',
  singerId: 0,
  fileName: '',
  timeLength: 0,
  backup_url: []
}
