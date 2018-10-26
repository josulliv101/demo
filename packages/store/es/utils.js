import { fork } from "redux-saga/effects";
import { makeAsyncActionCreator, makeActionCreator } from "redux-toolbelt";
import { makeAsyncSaga as makeAsyncSagaToolbelt } from "redux-toolbelt-saga"; // Actions will be prefixed with this in log

var ACTIONS_DOMAIN = "@@demo";
export var makeAsyncSaga = function makeAsyncSaga(options) {
  return function (action, fn) {
    return fork(makeAsyncSagaToolbelt(action, fn, options));
  };
};
export var makeActionCreators = function makeActionCreators(id) {
  return function () {
    var prefix = "".concat(ACTIONS_DOMAIN, "/").concat(id, "/");
    var makeAction = makeActionCreator.withDefaults({
      prefix: prefix
    });
    var makeAsyncAction = makeAsyncActionCreator.withDefaults({
      prefix: prefix
    });
    return {
      makeAction: makeAction,
      makeAsyncAction: makeAsyncAction
    };
  };
};
export var makeArray = function makeArray(payload) {
  return Array.isArray(payload) ? payload : [payload];
};
export var asArrayDataGetter = function asArrayDataGetter(state, _ref) {
  var payload = _ref.payload;
  return makeArray(payload);
};
export var alwaysTrueDataGetter = function alwaysTrueDataGetter(state, action) {
  return true;
};