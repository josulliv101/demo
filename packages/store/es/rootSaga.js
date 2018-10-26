import _regeneratorRuntime from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _toConsumableArray from "/Users/josulliv101/node/demo-app/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";

var _marked =
/*#__PURE__*/
_regeneratorRuntime.mark(sagas);

import { all, takeLatest } from "redux-saga/effects";
import userSagas from "./modules/users/sagas";
import postSagas from "./modules/posts/sagas";
export default function sagas() {
  return _regeneratorRuntime.wrap(function sagas$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return all(_toConsumableArray(userSagas()).concat(_toConsumableArray(postSagas())));

        case 3:
          _context.next = 7;
          break;

        case 5:
          _context.prev = 5;
          _context.t0 = _context["catch"](0);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[0, 5]]);
}