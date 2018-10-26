import React from "react";
import Button from "@material-ui/core/Button";
import { hideIfNoData } from "@demo/hocs";

const LoadIndicator = props => (
  <Button color="inherit" size="small">
    loading...
  </Button>
);

const enhance = hideIfNoData(props => !props.isLoading);

export default enhance(LoadIndicator);
