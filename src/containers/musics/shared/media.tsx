import React, { useCallback, useEffect, useState, useRef } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { useMappedState, useDispatch } from 'redux-react-hook';
import GetSongs from '../views/getSongs'
import { addCollectionSong } from '../store/actions/collection';
import { changePlayList } from '../store/actions/playList';
import musicPic from '../../../assets/music.jpg'
import { changeImgUrl } from '../utils/imgUrl';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/lab/Slider';
import { fade } from '@material-ui/core/styles/colorManipulator';


function MediaControlCard() {
  const myRef = useRef({} as any);

  const mapState = useCallback(
    state => ({
      play: state.play,
      songInfo: state.song.songInfo,
      hash: state.play.hash
    }), []
  )
  const state = useMappedState(mapState)

  function pause() {
    if (!myRef.current.paused) {
      console.log('pause')
      myRef.current.pause()
    }
  }
  function play() {
    if (myRef instanceof Object && myRef.current as any instanceof Object) {
      if (myRef.current.paused) {
        myRef.current.play()
        console.log('play')
      }
    }
  }
  function fastSeek(time: any) {
    if (time >=0 && time <= myRef.current.duration) {
      myRef.current.fastSeek(time)
    }
  }
  let id = -1
  function canPlay() {
    if (id > -1) {
      clearTimeout(id)
    }
    if (state.play.state) {
      id = setTimeout(play, 0)
      console.log(id)
    }
  }

  function update() {
    let last = true
    return () => {
      const hash = state.play.hash
      const songInfo = state.songInfo[hash]
      if (songInfo && songInfo.url && songInfo.url !== url && last) {
        changeUrl(songInfo.url)
        last = false
      }
    }
  }

  const [url, changeUrl] = useState('')

  useEffect(
    () => {
      canPlay()
    }, [url]
  )
  useEffect(
    () => {
      const { hash } = state.play
      const info = state.songInfo
      if (info && info[hash]) {
        if (url !==info[hash].url) {
          changeUrl(info[hash].url)
        }
      }
    }, [state.hash, state.songInfo]
  )
  return (
    <div>
      <button onClick={pause}>x</button>
      <audio ref={myRef} src={url} />
      <GetSongs />
    </div>
  );
}

export default MediaControlCard;