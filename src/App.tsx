import React from 'react';
import './App.css';
import store from './core/store/store'
import {StoreContext} from 'redux-react-hook';
import AppRouter from './shared/app';
import MediaControlCard from './containers/musics/shared/media'
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme: Theme) => ({
  footerBar: {
    top: 'auto',
    bottom: 0,
    'z-index': 1200
  }
}));
const App: React.FC = () => {
  const classes = useStyles({})

  return (
    <StoreContext.Provider value={store} >
      <AppRouter />
      <AppBar position="fixed" className={classes.footerBar}>
        <MediaControlCard />
      </AppBar>
    </StoreContext.Provider>
  );
}

export default App;
