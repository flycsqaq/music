import * as actions from '../../models/actions'
import { Song, MenuInfo } from "../../models/state";

export function getMenuList(menuList: MenuInfo[] = [], update: boolean = false): actions.GetMenuList {
  return {
    type: 'GET_MENU_LIST',
    menuList,
    update
  }
}

export function getMenuSongs(menuSpecialid: number, songs: Song[] = [], update: boolean = false): actions.GetMenuSongs {
  return {
    type: 'GET_MENU_SONGS',
    songs,
    menuSpecialid,
    update
  }
}