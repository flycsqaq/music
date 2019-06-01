import * as actions from '../../models/actions'
import { SongInfo } from '../../models/state';
import { SongInfoExample } from '../../models/constants';

interface InfoProps {
  hash: string
  songInfo?: SongInfo
  update?: boolean
  playImmediately?: boolean
}

export function getSongInfo({
    hash,
    songInfo = SongInfoExample, 
    update = false,
    playImmediately = false
  }: InfoProps): actions.GetSongInfo {
  return {
    type: 'GET_SONG_INFO',
    songInfo,
    hash,
    update,
    playImmediately
  }
}

export function getSongLrc(hash: string, songLrc: string = '', update: boolean = false): actions.GetSongLrc {
  return {
    type: 'GET_SONG_LRC',
    songLrc,
    hash,
    update
  }
}