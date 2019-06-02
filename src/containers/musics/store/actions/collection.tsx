import * as actions from '../../models/actions'
import { PlayMusic } from '../../models/state';

export function addCollection(name: string): actions.AddCollection {
  return {
    type: 'ADD_COLLECTION',
    name
  }
}

export function deleteCollection(name: string): actions.DeleteCollection {
  return {
    type: 'DELETE_COLLECTION',
    name
  }
}

export function addCollectionSong(name: string, hash: string): actions.AddSongCollection {
  return {
    type: 'ADD_SONG_COLLECTION',
    name,
    hash
  }
}

export function deleteCollectionSong(name: string,hash: string): actions.DeleteSongCollection {
  return {
    type: 'DELETE_SONG_COLLECTION',
    name,
    hash
  }
}

export function addMenuCollection(specialid: number): actions.AddMenuCollection {
  return {
    type: 'ADD_MENU_COLLECTION',
    specialid
  }
}

export function deleteMenuCollection(specialid: number): actions.DeleteMenuCollection {
  return {
    type: 'DELETE_MENU_COLLECTION',
    specialid
  }
}
