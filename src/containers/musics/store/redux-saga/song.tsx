import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { GET_SONG_INFO, GET_SONG_LRC } from '../../models/constants';
import { getSongInfo, getSongLrc } from '../actions/song';

export function* getSongInfoFlow(): Iterable<any> {
  while(true) {
    try {
      const req = yield take(GET_SONG_INFO)
      if (req.hash) {
        const res = yield call(api.songInfo, req.hash)
        yield put(getSongInfo({
          hash: req.hash ,
          songInfo: res.data.data, 
          update: true
        }))
      }
    } catch(e) {

    }
  }
}

export function* getSongLrcFlow(): Iterable<any> {
  while(true) {
    try {
      const req = yield take(GET_SONG_LRC)
      const res = yield call(api.songLrc, req.hash)
      yield put(getSongLrc(req.hash, res.data.data, true)) 
    } catch(e) {
      
    }
  }
}

