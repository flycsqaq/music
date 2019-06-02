import { MenuCollectonState } from "../../models/state";
import { MenuCollectionActions } from "../../models/actions";
import { deleteCollection } from "../common/collection";
import { menuCollectionState } from "../state/collection";

export function menuCollectionReducer(state: MenuCollectonState = menuCollectionState, action: MenuCollectionActions ): MenuCollectonState {
  switch(action.type) {
    case 'ADD_MENU_COLLECTION':
      return Object.assign({}, state, {[action.specialid]: []})
    case 'DELETE_MENU_COLLECTION':
      return deleteCollection(state, action.specialid)
    default:
      return state
  }
}