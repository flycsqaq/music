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

export const ADD_RECENTLY_MUSIC = 'ADD_RECENTLY_MUSIC'
export type ADD_RECENTLY_MUSIC = typeof ADD_RECENTLY_MUSIC

export const DELETE_RECENTLY_MUSIC = 'DELETE_RECENTLY_MUSIC'
export type DELETE_RECENTLY_MUSIC = typeof DELETE_RECENTLY_MUSIC

export const ADD_COLLECTION = 'ADD_COLLECTION'
export type ADD_COLLECTION = typeof ADD_COLLECTION

export const DELETE_COLLECTION = 'DELETE_COLLECTION'
export type DELETE_COLLECTION = typeof DELETE_COLLECTION

export const ADD_SONG_COLLECTION = 'ADD_SONG_COLLECTION'
export type ADD_SONG_COLLECTION = typeof ADD_SONG_COLLECTION

export const DELETE_SONG_COLLECTION = 'DELETE_SONG_COLLECTION'
export type DELETE_SONG_COLLECTION = typeof DELETE_SONG_COLLECTION

export const ADD_MENU_COLLECTION = 'ADD_MENU_COLLECTION'
export type ADD_MENU_COLLECTION = typeof ADD_MENU_COLLECTION

export const DELETE_MENU_COLLECTION = 'DELETE_MENU_COLLECTION'
export type DELETE_MENU_COLLECTION = typeof DELETE_MENU_COLLECTION

export const CHANGE_PLAY = 'CHANGE_PLAY'
export type CHANGE_PLAY = typeof CHANGE_PLAY

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
