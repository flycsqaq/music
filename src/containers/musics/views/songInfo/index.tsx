import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getSongInfo, getSongLrc } from '../../store/actions/song';
import { changeImgUrl } from '../../utils/imgUrl';

const SongInfo = (props: any) => {
  const mapState = useCallback(
    state => ({
      info: state.song.songInfo[props.match.params.hash],
      lrc: state.song.songLrc[props.match.params.hash]
    }), [props.match.params.hash]
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getSongInfo({hash: props.match.params.hash}))
      dispatch(getSongLrc(props.match.params.hash))
    }, []
  )
  function Img() {
    if (state.info) {
      if (state.info['album_img']) {
        return (
          <img src={changeImgUrl(state.info['album_img'])} />
        )
      }
      return <img src={changeImgUrl(state.info.imgUrl)} />
    }
    return null
  }
  function Info() {
    if (state.info) {
      return (
        <div>
          {state.info.fileName}
        </div>
      )
    }
    return null
  }
  function Lrc() {
    if (state.lrc) {
      return (
        <div>
          {state.lrc.map((l: string, index: number) => (
            <div key={index}>{l}</div>
          ))}
        </div>
      )
    }
    return null
  }
  return (
    <div>
      <Info />
      <Img />
      <Lrc />
    </div>
  )
}

export default SongInfo