export function changeImgUrl(url: string, input: number = 480) {
  return url.replace('{size}', input.toString())
}
