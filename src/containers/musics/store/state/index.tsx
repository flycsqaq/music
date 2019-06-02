import newState from "./new";
import searchState from "./search";
import menuState from "./menu";
import rankState from "./rank";
import singerState from "./singer";
import songState from "./song";
import { MusicStore } from "../../models/state";
import { musicCollectionState, menuCollectionState } from "./collection";
import { playState } from "./playList";

const musicStore: MusicStore = {
  search: searchState,
  new: newState,
  menu: menuState,
  rank: rankState,
  singer: singerState,
  song: songState,
  collectionList: musicCollectionState,
  menuCollectionList: menuCollectionState,
  play: playState
}

export default musicStore