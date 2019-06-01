import React from 'react'
import { Song } from '../models/state';
import { changeImgUrl } from '../utils/imgUrl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { useStyles } from './styles/grass'
interface Props {
  specialname: string
  intro: string
  songs: Song[]
  imgurl: string
  specialid: number
}

const MenuShow = (props: Props) => {
  const classes = useStyles({});

  return (
    <Link className={classes.link} to={`/music/menu/${props.specialid}`}>
      <Paper className={classes.root} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}}>
        <div className={classes.divp}>
          <div className={classes.div} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}} />
          <Typography component="p" className={classes.text}>
            {props.specialname}
          </Typography>
        </div>
      </Paper>
    </Link>
  )
}

export default MenuShow