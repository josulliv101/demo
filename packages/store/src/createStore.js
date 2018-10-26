import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

console.log("rootSaga", rootSaga);

export default function createReduxStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(...middlewares)
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  if (rootSaga) {
    sagaMiddleware.run(rootSaga);
  }

  return store;
}
