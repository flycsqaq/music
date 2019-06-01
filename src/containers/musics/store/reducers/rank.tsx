import { RankState } from "../../models/state";
import { RankActions } from "../../models/actions";
import rankState from "../state/rank";

export function rankReducer(state: RankState = rankState, action: RankActions): RankState {
  if (!action.update) return state
  switch (action.type) {
    case 'GET_RANK_LIST':
      return { ...state, rankList: action.rankList }
    case 'GET_RANK_SONGS':
      return { ...state, rankSongs: Object.assign({}, state.rankSongs, {[action.rankid]: action.songs}) }
    default:
      return state
  }
}