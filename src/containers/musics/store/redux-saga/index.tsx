import { fork } from 'redux-saga/effects'
import { getNewSongsFlow } from './new'
import { getMenuListFlow, getMenuSongsFlow } from './nemu';
import { getRankListFlow, getRankSongsFlow } from './rank';
import { searchSongsFlow } from './search';
import { getSingerInfoFlow, getSingerClassesFlow, getSingerClassSingerListFlow } from './singer';
import { getSongInfoFlow, getSongLrcFlow } from './song';

export default function* musicSaaga() {
  yield fork(getNewSongsFlow)
  yield fork(getMenuListFlow)
  yield fork(getMenuSongsFlow)
  yield fork(getRankListFlow)
  yield fork(getRankSongsFlow)
  yield fork(searchSongsFlow)
  yield fork(getSingerClassesFlow)
  yield fork(getSingerClassSingerListFlow)
  yield fork(getSingerInfoFlow)
  yield fork(getSongInfoFlow)
  yield fork(getSongLrcFlow)
}