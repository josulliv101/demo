import React from "react";
import { branch, renderNothing } from "recompose"; // Taken directly from https://github.com/acdlite/recompose/blob/master/docs/API.md#branch

var hideIfNoData = function hideIfNoData(hasNoData) {
  return branch(hasNoData, renderNothing);
};

export default hideIfNoData;