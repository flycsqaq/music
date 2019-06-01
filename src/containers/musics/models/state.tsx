export interface Song {
  filename: string
  hash: string
  remark: string
  extname: string
  filesize: number
  ["audio_id"]: string
}

export interface SongList {
  list: {
    info: Song[]
  }
  page: number
  pagesize: number
}

export interface MenuInfo {
  recommendfirst: number
  specialname: string
  intro: string
  songs: Song[]
  specialid: number
  username: string
  imgurl: string
}

export interface RankInfo {
  rankid: number,
  update_frequency: string
  intro: string
  imgurl: string
  banner7url: string
  bannerurl: string
  rankname: string
  ranktype: number
}

export interface SongExtra {
  ["320filesize"]: number
  ["sqfilesize"]: number
  ["sqhash"]: string
  ["128hash"]: string
  ["320hash"]: string
  ["128filesize"]: number
}

export interface SongInfo {
  extra: SongExtra
  fileSize: number
  choricSinger: string
  ["album_img"]: string
  ["topic_remark"]: string
  url: string
  time: number
  singerName: number
  songName: string
  extName: string
  singerHead: string
  imgUrl: string
  error: string
  hash: string
  singerId: number
  fileName: string
  timeLength: number
  backup_url: string[]
}

export interface SingerClasses {
  classid: number
  classname: string
  imgurl: string
}

export interface SingerClassSingerInfo {
  singername: string
  intro: string
  heat: number
  singerid: number
  imgurl: string
  fanscount: number
  mvcount: number
}

export interface SingerInfo {
  info: {
    identity: number
    intro: string
    songcount: number
    imgurl: string
    singerid: number
    albumcount: number
    singername: string
    profile: string
  }
  songs: {
    total: number
    pagesize: number
    list: Song[]
  }
}


interface songObject {
  [propName: string]: Song[]
}

export interface SearchState {
  searchKeyword: string
  searchSongs: Song[]
}

export interface NewState {
  newSongs: Song[]
}

export interface MenuState {
  menuList: MenuInfo[]
  menuSongs: songObject
}

export interface RankState {
  rankList: RankInfo[]
  rankSongs: songObject
}

export interface SongState {
  songInfo: { [propName: string]: SongInfo }
  songLrc: { [propName: string]: string[] }
}

export interface SingerState {
  singerClasses: SingerClasses[]                          
  singerClassSingerList: { [propName: string]: SingerClassSingerInfo[] }
  singerInfo: { [propName: string]: SingerInfo } 
}

export interface PlayMusic extends SongInfo {}

export interface MusicStore {
  search: SearchState,
  new: NewState
  menu: MenuState
  rank: RankState
  song: SongState
  singer: SingerState,
} 

