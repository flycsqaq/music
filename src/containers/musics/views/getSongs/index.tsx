import React, { useEffect, useCallback } from 'react'
import {useDispatch, useMappedState} from 'redux-react-hook'
import { getSongInfo } from '../../store/actions/song';

export default () => {
  const mapState = useCallback(
    state => ({
      play: state.play,
      recently: state.recently,
      musicCollection: state.musicCollection,
      menuCollection: state.menuCollection,
      songInfo: state.song.songInfo
    }), []
  )
  const state = useMappedState(mapState)
  const dispatch = useDispatch()
  // 不知道为什么会提交两次

  useEffect(
    () => {
      dispatch(getSongInfo({hash: state.play.hash}))
    }, [state.play.hash]
  )
  const map: any = {
    'song': state.musicCollection,
    'menu': state.menuCollection
  }
  function getSongsInterator() {
    const { tag, playList } = state.play
    let collection: any
    if (map[tag] && map[tag][playList]) {
      collection = map[tag][playList]
    }
    if (Array.isArray(collection)) {
      var len = collection.length
      let arr = []
      for (var i = 0; i < len && arr.length < 3; i++) {
        if (collection[i].hash && !collection[i].url) {
          arr.push(collection[i].hash)
        }
      }
      arr.forEach((hash) => {
        if (hash) {
          dispatch(getSongInfo({hash: hash}))
        }
      })
    }
  }
  function update(song: any, state: any) {
    if (state instanceof Object) {
      const key =  Object.keys(state).find((hash) => hash === song.hash)
      if (key) {
        return state[key]
      }
    }
  }
  function updateCollectionSongInfo(collection: any[]) {
    const songInfo = state.songInfo
    const len = collection.length
    for (var i = 0; i < len; i++) {
      const info = update(collection[i], songInfo)
      if (info) {
        collection[i] = info
      }
    }
  }
  function updateCollections() {
    const menu = state.menuCollection
    const my = state.musicCollection
    const combine = { ...menu, ...my }
    const keys = Object.keys(combine)
    keys.forEach((key) => {
      updateCollectionSongInfo(combine[key])
    })
  }
  const getIntervalId = setInterval(getSongsInterator, 1000)
  const updateIntervalId = setInterval(updateCollections, 1000)
  return null
}