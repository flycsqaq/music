import { menuReducer } from "./menu";
import { newSongReducer } from "./new";
import { rankReducer } from "./rank";
import { searchReducer } from "./search";
import { singerReducer } from "./singer";
import { songReducer } from "./song";

const musicReducer = {
  menu: menuReducer,
  new: newSongReducer,
  rank: rankReducer,
  search: searchReducer,
  singer: singerReducer,
  song: songReducer,
}

export default musicReducer