import React from 'react'
import { Paper } from '@material-ui/core';
import { changeImgUrl } from '../utils/imgUrl';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { useStyles } from './styles/grass'

interface Props {
  imgurl: string
  classname: string
  classid: number
}


const SingerClass = (props: Props) => {
  const classes = useStyles({});

  return (
    <Link to={`/music/singerList/${props.classid}`}>
      <Paper className={classes.root} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}}>
        <div className={classes.divp}>
          <div className={classes.div} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}} />
          <Typography component="p" className={classes.text}>
            {props.classname}
          </Typography>
        </div>
      </Paper>
    </Link>
  )
}

export default SingerClass