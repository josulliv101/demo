import React from "react";
import PropTypes from "prop-types";
import { branch, compose, renderComponent } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import { messageIfNoData } from "@demo/hocs";

const styles = theme => ({
  gridlist: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: 4,
    width: 480,
    height: 388,
    overflow: "auto"
  }
});

//  Taken from https://material-ui.com/demos/grid-list/ gridlist example
function Collage(props) {
  const { classes, tileData } = props;
  return (
    <div className={classes.gridlist}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

Collage.propTypes = {
  tileData: PropTypes.array.isRequired
};

const enhance = compose(
  messageIfNoData(
    // Provide the test to see if message component should display
    ({ tileData }) => !tileData
  ),
  withStyles(styles)
);
export default enhance(Collage);
