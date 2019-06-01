import * as actions from '../../models/actions'
import { Song } from "../../models/state";

export function getNewSongs(songs: Song[] = [], update: boolean = false): actions.GetNewSongs {
  return {
    type: 'GET_NEW_SONGS',
    songs,
    update
  }
}