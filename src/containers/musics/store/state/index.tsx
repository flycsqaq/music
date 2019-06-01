import newState from "./new";
import searchState from "./search";
import menuState from "./menu";
import rankState from "./rank";
import singerState from "./singer";
import songState from "./song";
import { MusicStore } from "../../models/state";

const musicStore: MusicStore = {
  search: searchState,
  new: newState,
  menu: menuState,
  rank: rankState,
  singer: singerState,
  song: songState,
}

export default musicStore