import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { getNewSongs } from '../actions/new'
import { GET_NEW_SONGS } from '../../models/constants';

export function* getNewSongsFlow(): Iterable<any> {
  while(true) {
    try {
      yield take(GET_NEW_SONGS)
      const res = yield call(api.newSongs)
      yield put(getNewSongs(res.data.data, true))   
    } catch(e) {
      
    }
  }
}