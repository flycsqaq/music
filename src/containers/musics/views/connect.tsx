import React from 'react'
import { connect } from 'react-redux'
import { getNewSongs } from '../store/actions/new';
import { MusicStore } from '../models/state';
import { getMenuList, getMenuSongs } from '../store/actions/menu';
import { getRankList, getRankSongs } from '../store/actions/rank';
import { searchSongs } from '../store/actions/search';
import { getSingerClasses, getSingerClassSingerList, getSingerInfo } from '../store/actions/singer';
import { getSongInfo, getSongLrc } from '../store/actions/song';

const mapDispatchToProps = (dispatch: any) => {
  return {
    getNewSongs: () => dispatch(getNewSongs()),
    getMenuList: () => dispatch(getMenuList()),
    getMenuSongs: (menuName: string, menuSpecialid: number) => dispatch(getMenuSongs(menuSpecialid)),
    getRankList: () => dispatch(getRankList()),
    getRankSongs: (rankName: string, rankeid: number) => dispatch(getRankSongs(rankeid)),
    searchSongs: (keyword: string, page: number = 1) => dispatch(searchSongs(keyword, page)),
    getSingerClasses: () => dispatch(getSingerClasses()),
    getSingerClassSingerList: (className: string, classid: number) => dispatch(getSingerClassSingerList(classid)),
    getSingerInfo: (singerName: string, singerid: number) => dispatch(getSingerInfo(singerid)),
    getSongInfo: (songName: string, hash: string) => dispatch(getSongInfo({hash})),
    getSongLrc: (songName: string, hash: string) => dispatch(getSongLrc(songName, hash))
  }
}

const mapStateToProps = (state: MusicStore) => {
  return {
    newSongs: () => state
  }
}

const view = (props: any) => {
  return (
    <div>
      <button onClick={props.getNewSongs}>new</button>
      <button onClick={props.getMenuList}>munu list</button>
      <button onClick={() => props.getMenuSongs('你如年少的欢喜，亦是长大后的悲欢', 698326)}>menu song</button>
      <button onClick={props.getRankList}>rank List</button>
      <button onClick={() => props.getRankSongs("酷狗飙升榜", 6666)}>rank songs</button>
      <button onClick={() => props.searchSongs('好')}>search</button>
      <button onClick={() => props.searchSongs('好', 2)}>search2</button>
      <button onClick={() => props.getSingerClasses()}>singer classes</button>
      <button onClick={() => props.getSingerClassSingerList('热门歌手', 88)}>classes singers</button>
      <button onClick={() => props.getSingerInfo('周杰伦', 3520)}>singer info</button>
      <button onClick={() => props.getSongInfo('刚好遇见你', 'CB7EE97F4CC11C4EA7A1FA4B516A5D97')}>song info</button>
      <button onClick={() => props.getSongLrc('刚好遇见你', 'CB7EE97F4CC11C4EA7A1FA4B516A5D97')}>song lrc</button>
      <button onClick={() => console.log(props.newSongs())}>console</button>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(view)