import { MenuCollectonState, PlayState } from "../../models/state";
import { MenuCollectionActions, playActions } from "../../models/actions";
import { deleteCollection } from "../common/collection";
import { menuCollectionState } from "../state/collection";
import { playState } from "../state/playList";

export function playReducer(state: PlayState = playState, action: playActions ): PlayState {
  switch(action.type) {
    case 'CHANGE_PLAY':
    console.log(action.hash)
      return { playList: action.name, hash: action.hash, tag: action.tag, state: action.state }
    default:
      return state
  }
}