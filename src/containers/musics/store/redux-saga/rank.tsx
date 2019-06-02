import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { getRankList, getRankSongs } from '../actions/rank'
import { GET_RANK_LIST, GET_RANK_SONGS } from '../../models/constants';

export function* getRankListFlow(): Iterable<any> {
  while(true) {
    try {
      yield take(GET_RANK_LIST)
      const res = yield call(api.rankList)
      yield put(getRankList(res.data.data.list, true))    
    } catch(e) {

    }
  }
}

export function* getRankSongsFlow(): Iterable<any> {
  while(true) {
    try {
      const request = yield take(GET_RANK_SONGS)
      const res = yield call(api.rankSongs, request.rankid)
      yield put(getRankSongs(request.rankid, res.data.data.songs.list, true))    
    } catch(e) {
      
    }
  }
}