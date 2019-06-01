import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { SEARCH_SONGS } from '../../models/constants';
import { searchSongs } from '../actions/search';

export function* searchSongsFlow():  Iterable<any> {
  while(true) {
    const req = yield take(SEARCH_SONGS)
    const res = yield call(api.songSearch, req.keyword, req.pagesize, req.page)
    console.log(res)
    yield put(searchSongs( req.keyword, req.page, req.pagesize, res.data.data.info, res.data.data.total, true))
  }
}