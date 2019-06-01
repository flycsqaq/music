import * as actions from '../../models/actions'
import { Song } from '../../models/state';

export function searchSongs(keyword: string, page: number = 1, pagesize: number = 20, songs: Song[] = [], total: number = 0, update: boolean = false): actions.SearchSongs {
  return {
    type: 'SEARCH_SONGS',
    songs,
    keyword,
    update,
    total,
    pagesize,
    page
  }
}