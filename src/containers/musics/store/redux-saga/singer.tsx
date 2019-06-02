import * as api from '../../services/api'
import { call, put, take } from 'redux-saga/effects'
import { GET_SINGER_CLASSES, GET_SINGER_CLASS_SINGER_LIST, GET_SINGER_INFO } from '../../models/constants';
import { getSingerClasses, getSingerClassSingerList, getSingerInfo } from '../actions/singer';

export function* getSingerClassesFlow(): Iterable<any> {
  while(true) {
    try {
      yield take(GET_SINGER_CLASSES)
      const res = yield call(api.singerClasses)
      yield put(getSingerClasses(res.data.data, true))    
    } catch(e) {

    }
  }
}

export function* getSingerClassSingerListFlow(): Iterable<any> {
  while(true) {
    try {
      const request = yield take(GET_SINGER_CLASS_SINGER_LIST)
      const res = yield call(api.singerClassSingerList, request.classid)
      yield put(getSingerClassSingerList(request.classid, res.data.data.singers.list.info, true))   
    } catch(e) {

    }
  }
}

export function* getSingerInfoFlow(): Iterable<any> {
  while(true) {
    try {
      const request = yield take(GET_SINGER_INFO)
      const res = yield call(api.singerInfo, request.singerid)
      yield put(getSingerInfo(request.singerid, res.data.data, true))
    } catch(e) {
      
    }
  }
}