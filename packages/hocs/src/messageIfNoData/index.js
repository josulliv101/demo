import React from "react";
import PropTypes from "prop-types";
import { branch, renderComponent } from "recompose";
import Typography from "@material-ui/core/Typography";

// This should proably live somewhere else. For now good here.
const StandardMessage = () => (
  <Typography variant="body1">This component was passed no data.</Typography>
);

// See @demo/ui-core/Collage for example usage
const messageIfNoData = hasNoData =>
  branch(hasNoData, renderComponent(StandardMessage));

export default messageIfNoData;
