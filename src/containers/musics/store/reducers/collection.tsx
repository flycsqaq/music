import { MusicCollectionState } from "../../models/state";
import { MusicCollectionActions } from "../../models/actions";
import { deleteCollection, addSong, deleteSong } from "../common/collection";
import { musicCollectionState } from "../state/collection";

export function musicCollectionReducer(state: MusicCollectionState = musicCollectionState, action: MusicCollectionActions): MusicCollectionState {
  switch(action.type) {
    case 'ADD_COLLECTION':
      return Object.assign({}, state, {[action.name]: []})
    case 'DELETE_COLLECTION':
      return deleteCollection(state, action.name)
    case 'ADD_SONG_COLLECTION':
      return addSong(state, action.name, action.hash)
    case 'DELETE_SONG_COLLECTION':
      return deleteSong(state, action.name, action.hash)
    default:
      return state
  }
}