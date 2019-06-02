import React from 'react'
import { Paper } from '@material-ui/core';
import { changeImgUrl } from '../utils/imgUrl';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { useStyles } from './styles/grass'

interface Props {
  imgurl: string
  rankname: string
  rankid: number
}

const SongRank = (props: Props) => {
  const classes = useStyles({});

  return (
    <Link to={`/music/songRank/${props.rankid}`}>
    <Paper className={classes.root} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}}>
      <div className={classes.divp}>
        <div className={classes.div} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}} />
        <Typography component="p" className={classes.text}>
          {props.rankname}
        </Typography>
      </div>
    </Paper>
    </Link>
  )
}

export default SongRank