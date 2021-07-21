import {createStore, applyMiddleware, compose} from "redux"
import {createEpicMiddleware} from "redux-observable"
import {rootEpics} from "./rootEpics"
import {rootReducers} from "./rootReducers"


const epicMiddleware = createEpicMiddleware()
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = (): any => {
  const middlewares = [];
  middlewares.push(epicMiddleware);

  const store = createStore(
    rootReducers,
    compose(applyMiddleware(...middlewares), composeEnhancers())
  )
  epicMiddleware.run(rootEpics)

  return store
}
