import { RouterType } from "../../containers/musics/models/router";
import musicRouter from "../../containers/musics/router";

const globalRouter: RouterType[] = [
  ...musicRouter
]

export default globalRouter