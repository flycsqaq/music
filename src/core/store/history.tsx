import { createBrowserHistory } from "history";
export const history = createBrowserHistory()

export function push(path: string) {
  history.push(path)
}