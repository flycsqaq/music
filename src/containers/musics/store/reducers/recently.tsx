import { RecentlyMusicState } from "../../models/state";
import { RecentlyActions } from "../../models/actions";
import { recentlyListState } from "../state/recently";
import { deleteSongs } from "../common/recently";

export function recentlyMusicReducer(state: RecentlyMusicState = recentlyListState, action: RecentlyActions): RecentlyMusicState {
  switch(action.type) {
    case 'ADD_RECENTLY_MUSIC':
      return  state.concat(action.song)
    case 'DELETE_RECENTLY_MUSIC':
      return deleteSongs(state, action.hash)
    default:
      return state
  }
}