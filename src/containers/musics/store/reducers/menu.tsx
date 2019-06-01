import { MenuState } from "../../models/state";
import { MenuActions } from "../../models/actions";
import menuState from "../state/menu";

export function menuReducer(state: MenuState = menuState, action: MenuActions): MenuState {
  if (!action.update) return state
  switch (action.type) {
    case 'GET_MENU_LIST':
      return { ...state, menuList: action.menuList }
    case 'GET_MENU_SONGS':
      return { ...state, menuSongs: Object.assign({}, state.menuSongs, {[action.menuSpecialid]: action.songs}) }
    default:
      return state
  }
}