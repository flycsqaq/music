import * as actions from '../../models/actions'
import { PlayMusic } from '../../models/state';

export function addRecentlyMusic(song: PlayMusic): actions.AddRecentlyMusic {
  return {
    type: 'ADD_RECENTLY_MUSIC',
    song
  }
}

export function deleteRecentlyMusic(hash: string): actions.DeleteRecentlyMusic {
  return {
    type: 'DELETE_RECENTLY_MUSIC',
    hash
  }
}