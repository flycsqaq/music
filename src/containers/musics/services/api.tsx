import instance from "../../../core/services";
import { AxiosPromise } from "axios";

export function newSongs(): AxiosPromise {
  return instance({
    url: 'new_songs',
    method: 'get'
  })
}

export function menuList(): AxiosPromise {
  return instance({
    url: 'plist',
    method: 'get'
  })
}

export function menuSongs(specialid: number): AxiosPromise {
  return instance({
    url: `plist_songs/${specialid}`,
    method: 'get',
  })
}

export function rankList(): AxiosPromise {
  return instance({
    url: 'rank_list',
    method: 'get'
  })
}

export function rankSongs(rankid: number): AxiosPromise {
  return instance({
    url: `rank_list_info/${rankid}`,
    method: 'get'
  })
}

export function singerClasses(): AxiosPromise {
  return instance({
    url: 'singer_classify',
    method: 'get'
  })
}

export function singerClassSingerList(classid: number): AxiosPromise {
  return instance({
    url: `singer_list/${classid}`,
    method: 'get'
  })
}

export function singerInfo(singerid: number): AxiosPromise {
  return instance({
    url: `singer_info/${singerid}`,
    method: 'get'
  })
}

export function songInfo(hash: string): AxiosPromise {
  return instance({
    url: `song_info/${hash}`,
    method: 'get'
  })
}

export function songLrc(hash: string): AxiosPromise {
  return instance({
    url: `song_lrc/${hash}`,
    method: 'get'
  })
}

export function songSearch(keyword: string, pagesize: number = 20, page: number = 1): AxiosPromise {
  return instance({
    url: `music_search/${keyword}/${pagesize}/${page}`,
    method: 'get'
  })
}