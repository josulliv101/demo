import React from "react";
import PropTypes from "prop-types";
import { compose } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import { Collage } from "@demo/ui-core";
import { withCallout } from "@demo/hocs";

const styles = theme => ({
  root: {
    border: "2px #ccc solid"
  }
});

// gridlist example from https://material-ui.com/demos/grid-list/
function CollageExample({ classes }) {
  return <Collage className={classes.root} tileData={getImageData()} />;
}

CollageExample.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withCallout("A collage of photos"),
  withStyles(styles)
)(CollageExample);

// hardcode bad
const getImageData = () => [
  {
    img: "https://picsum.photos/320/213?image=1084",
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: "https://picsum.photos/320/213?image=1075",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1013",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1051",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1027",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1033",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1022",
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: "https://picsum.photos/320/213?image=1052",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1021",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1032",
    title: "Image",
    author: "author",
    cols: 1
  },
  {
    img: "https://picsum.photos/320/213?image=1082",
    title: "Image",
    author: "author",
    cols: 2
  },
  {
    img: "https://picsum.photos/320/213?image=1072",
    title: "Image",
    author: "author",
    cols: 1
  }
];
