import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'

export default ({ source }: any) => {
  let myRef: any = React.createRef()
  let audio = myRef.current
  function pause() {
    if (!audio.paused) {
      audio.pause()
    }
  }
  function play() {
    if (audio.paused) {
      audio.play() 
    }
  }
  function fastSeek(time: any) {
    if (time >=0 && time <= audio.duration) {
      audio.fastSeek(time)
    }
  }
  return (
    <source ref={myRef} src={source} />
  )
}