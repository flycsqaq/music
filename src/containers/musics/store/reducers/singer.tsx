import { SingerState } from "../../models/state";
import { SingleActions } from "../../models/actions";
import singerState from "../state/singer";

export function singerReducer(state: SingerState = singerState, action: SingleActions): SingerState {
  if (!action.update) return state
  switch (action.type) {
    case 'GET_SINGER_CLASSES':
      return { ...state, singerClasses: [...action.singerClasses] }
    case 'GET_SINGER_CLASS_SINGER_LIST':
      return { ...state, singerClassSingerList: Object.assign({}, state.singerClassSingerList, {[action.classid]: action.singerClassSingerList}) }
    case 'GET_SINGER_INFO':
      return { ...state, singerInfo: Object.assign({}, state.singerInfo, {[action.singerid]: action.singerInfo}) }
    default:
      return state
  }
}