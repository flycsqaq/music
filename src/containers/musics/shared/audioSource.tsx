import React, { useEffect, useCallback, useState } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
// 维护一个音乐队列
// 播放、暂停、下一首、上一首
export default ({ source }: any) => {
  let myRef: any = React.createRef()
  let audio: any
  let s = "http://fs.open.kugou.com/0f785893fb5a3400983d36a47ec0e901/5cf10ba4/G163/M00/09/11/g5QEAFyZtMWAOJJVADXYqVaGbS8415.mp3"
  const [src, changeSrc] = useState(s)
  useEffect(
    () => {
      audio = myRef.current
    }, [src]
  )
  function play() {
    audio.play()
  }
  function changeSource(src: string) {
    changeSrc(src)
  }
  function pause() {
    audio.pause()
  }
  function changeTime(time: string) {
    audio.currenTime = time
  }
  return (
    <audio ref={myRef} src={src}>
    </audio>
  )
}