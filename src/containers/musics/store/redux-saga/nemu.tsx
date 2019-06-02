import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { getMenuList, getMenuSongs } from '../actions/menu'
import { GET_MENU_LIST, GET_MENU_SONGS } from '../../models/constants';

export function* getMenuListFlow(): Iterable<any> {
  while(true) {
    try {
      yield take(GET_MENU_LIST)
      const res = yield call(api.menuList)
      yield put(getMenuList(res.data.data.list.info, true))
    } catch(e) {

    }
  }
}

export function* getMenuSongsFlow(): Iterable<any> {
  while(true) {
    try {
      const request = yield take(GET_MENU_SONGS)
      const res = yield call(api.menuSongs, request.menuSpecialid)
      yield put(getMenuSongs(request.menuSpecialid, res.data.data.list.info, true))
    } catch(e) {
      
    }
  }
}