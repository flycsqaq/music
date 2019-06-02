import { MusicCollectionState } from "../../models/state";

export function deleteCollection(state: MusicCollectionState, name: string | number) {
  const obj = Object.assign(state)
  if (obj[name]) {
    delete obj[name]
  }
  return obj
}

export function addSong(state: MusicCollectionState, name: string, hash: string) {
  const obj = Object.assign(state)
  const index = obj[name].findIndex((song: any) => {
    return song.hash === hash
  })
  if (index > -1) {
    return obj
  }
  obj[name].unshift({ hash })
  return obj  
}

export function deleteSong(state: MusicCollectionState, name: string, hash: string) {
  const obj = Object.assign(state)
  if (obj[name] && obj[name][hash]) {
    delete obj[name][hash]
  }  
  return obj
}