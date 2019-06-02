import * as actions from '../../models/actions'

export function changePlayList(name: string, hash: string, tag: string, state: boolean): actions.ChangePlay {
  return {
    type: 'CHANGE_PLAY',
    name,
    hash,
    tag,
    state
  }
}
