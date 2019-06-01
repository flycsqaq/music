import { SongState } from "../../models/state";
import { SongActions } from "../../models/actions";
import songState from "../state/song";

export function songReducer(state: SongState = songState, action: SongActions): SongState {
  if (!action.update) return state
  switch (action.type) {
    case 'GET_SONG_INFO':
      return { ...state, songInfo: Object.assign({}, action.songInfo, {[action.hash]: action.songInfo}) }
    case 'GET_SONG_LRC':
      return {  ...state, songLrc: Object.assign({}, action.songLrc, {[action.hash]: action.songLrc.split('\r\n')}) }
    default:
      return state
  }
}