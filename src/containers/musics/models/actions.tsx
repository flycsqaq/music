import * as constants from './constants'
import { Song, MenuInfo, RankInfo, SingerClasses, SingerClassSingerInfo, SingerInfo, SongInfo, PlayMusic } from './state';

// newActions
interface Update {
  update: boolean
}
export interface GetNewSongs extends Update {
  type: constants.GET_NEW_SONGS
  songs: Song[]
}

export type NewActions = GetNewSongs

// menuActions
export interface GetMenuList extends Update {
  type: constants.GET_MENU_LIST
  menuList: MenuInfo[]
}

export interface GetMenuSongs extends Update {
  type: constants.GET_MENU_SONGS
  songs: Song[]
  menuSpecialid: number
}

export type MenuActions = GetMenuList | GetMenuSongs

// rankActions
export interface GetRankList extends Update {
  type: constants.GET_RANK_LIST
  rankList: RankInfo[]
}

export interface GetRankSongs extends Update {
  type: constants.GET_RANK_SONGS
  songs: Song[]
  rankid: number
}

export type RankActions = GetRankList | GetRankSongs

// singerActions
export interface GetSingerClasses extends Update {
  type: constants.GET_SINGER_CLASSES
  singerClasses: SingerClasses[]
}

export interface GetSingerClassSingerList extends Update  {
  type: constants.GET_SINGER_CLASS_SINGER_LIST
  singerClassSingerList: SingerClassSingerInfo[]
  classid: number
}

export interface GetSingerInfo extends Update {
  type: constants.GET_SINGER_INFO
  singerInfo: SingerInfo
  singerid: number
}

export type SingleActions = GetSingerClasses | GetSingerClassSingerList | GetSingerInfo

// songActions
export interface GetSongInfo extends Update {
  type: constants.GET_SONG_INFO
  songInfo: SongInfo,
  hash: string
  playImmediately: boolean
}

export interface GetSongLrc extends Update {
  type: constants.GET_SONG_LRC
  songLrc: string,
  hash: string
}

export type SongActions = GetSongInfo | GetSongLrc

// searchActions
export interface SearchSongs extends Update {
  type: constants.SEARCH_SONGS
  songs: Song[]
  keyword: string
  pagesize: number
  page: number,
  total: number
}

export type SearchActions = SearchSongs

// musicActions
export type musicActions = NewActions | MenuActions | RankActions | SingleActions | SongActions | 
                           SearchActions