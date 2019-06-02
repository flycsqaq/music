import { menuReducer } from "./menu";
import { newSongReducer } from "./new";
import { rankReducer } from "./rank";
import { searchReducer } from "./search";
import { singerReducer } from "./singer";
import { songReducer } from "./song";
import { recentlyMusicReducer } from "./recently";
import { musicCollectionReducer } from "./collection";
import { menuCollectionReducer } from "./menuCollection";
import { playReducer } from "./playList";

const musicReducer = {
  menu: menuReducer,
  new: newSongReducer,
  rank: rankReducer,
  search: searchReducer,
  singer: singerReducer,
  song: songReducer,
  recently: recentlyMusicReducer,
  musicCollection: musicCollectionReducer,
  menuCollection: menuCollectionReducer,
  play: playReducer
}

export default musicReducer