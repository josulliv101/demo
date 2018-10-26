import { fork } from "redux-saga/effects";
import { makeAsyncActionCreator, makeActionCreator } from "redux-toolbelt";
import { makeAsyncSaga as makeAsyncSagaToolbelt } from "redux-toolbelt-saga";

// Actions will be prefixed with this in log
const ACTIONS_DOMAIN = "@@demo";

export const makeAsyncSaga = options => (action, fn) =>
  fork(makeAsyncSagaToolbelt(action, fn, options));

export const makeActionCreators = id => () => {
  const prefix = `${ACTIONS_DOMAIN}/${id}/`;
  const makeAction = makeActionCreator.withDefaults({ prefix });
  const makeAsyncAction = makeAsyncActionCreator.withDefaults({ prefix });
  return { makeAction, makeAsyncAction };
};

export const makeArray = payload =>
  Array.isArray(payload) ? payload : [payload];

export const asArrayDataGetter = (state, { payload }) => makeArray(payload);

export const alwaysTrueDataGetter = (state, action) => true;
