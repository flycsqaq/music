import React from 'react'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { useStyles } from './styles/grass'
import { changeImgUrl } from '../utils/imgUrl';

interface Props {
  singername: string
  singerid: number
  imgurl: string
}

const SingerShow = (props: Props) => {
  const classes = useStyles({});

  return (
    <Link className={classes.link} to={`/music/singer/${props.singerid}`}>
      <Paper className={classes.root}  style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}}>
        <div className={classes.divp}>
          <div className={classes.div} style={{background: `url(${changeImgUrl(props.imgurl)}) 0 / 100%`}} />
          <Typography component="p" className={classes.text}>
            {props.singername}
          </Typography>
        </div>
      </Paper>
    </Link>
  )
}

export default SingerShow