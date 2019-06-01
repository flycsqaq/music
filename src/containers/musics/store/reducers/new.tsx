import { NewState } from "../../models/state";
import { NewActions } from "../../models/actions";
import newState from "../state/new";

export function newSongReducer(state: NewState = newState, action: NewActions): NewState {
  if (!action.update) return state
  switch (action.type) {
    case 'GET_NEW_SONGS':
      return { newSongs: action.songs }
    default:
      return state
  }
}