import { SearchState } from "../../models/state";
import { SearchActions } from "../../models/actions";
import searchState from "../state/search";

export function searchReducer(state: SearchState = searchState, action: SearchActions): SearchState {
  if (!action.update) return state
  switch (action.type) {
    case 'SEARCH_SONGS':
      let songs: any[]
      if (action.keyword !== state.searchKeyword) {
        songs = new Array(action.total)
      } else {
        songs = state.searchSongs.slice()
      }
      const start = (action.page - 1) * action.pagesize
      songs.splice(start, action.pagesize, ...action.songs)
      return { searchKeyword: action.keyword, searchSongs: songs }
    default:
      return state
  }
}