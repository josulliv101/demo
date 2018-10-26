import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
console.log("rootSaga", rootSaga);
export default function createReduxStore() {
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var sagaMiddleware = createSagaMiddleware();
  var middlewares = [sagaMiddleware];
  var createStoreWithMiddleware = composeEnhancers(applyMiddleware.apply(void 0, middlewares))(createStore);
  var store = createStoreWithMiddleware(rootReducer);

  if (rootSaga) {
    sagaMiddleware.run(rootSaga);
  }

  return store;
}