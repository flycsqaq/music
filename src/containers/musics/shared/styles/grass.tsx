import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(2, 1),
      cursor: 'pointer',
      height: '100%'
    },
    divp: {
      position: 'relative',
      padding: theme.spacing(1, 1),
      background: 'hsla(0, 0%, 100%, .3)',
      overflow: 'hidden',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    link: {
      height: '100%',
      display: 'inline-block',
      width: '100%'
    },
    div: {
      filter: 'blur(20px)',
      position: 'absolute',
      top: 0,
      left: -theme.spacing(1),
      bottom: 0,
      right: -theme.spacing(1),
    },
    text: {
      position: 'relative',
      textAlign: 'center'
    }, 

  }),
);