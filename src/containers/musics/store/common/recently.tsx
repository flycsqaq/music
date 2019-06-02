import { Song } from "../../models/state";
import { RecentlyMusicState } from "../../models/state";

export function deleteSongs(state: RecentlyMusicState, hash: string) {
  return state.filter((song) => {
    return song.hash !== hash
  })
}