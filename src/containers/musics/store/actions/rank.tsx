import * as actions from '../../models/actions'
import { Song, RankInfo } from "../../models/state";

export function getRankList(rankList: RankInfo[] = [], update: boolean = false): actions.GetRankList {
  return {
    type: 'GET_RANK_LIST',
    rankList,
    update
  }
}

export function getRankSongs(rankid: number, songs: Song[] = [], update: boolean = false): actions.GetRankSongs {
  return {
    type: 'GET_RANK_SONGS',
    songs,
    rankid,
    update
  }
}