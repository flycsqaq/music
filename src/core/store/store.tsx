import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import { globalReducer } from "./reducers";
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  globalReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default store