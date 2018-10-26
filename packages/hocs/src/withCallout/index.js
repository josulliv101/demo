import React from "react";
import PropTypes from "prop-types";
import { branch, renderComponent } from "recompose";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";

/*
 *  This HOC is not really needed... it does same exact thing as the following would:
 *
 *  <Callout title="foo">
 *    <SomeComponent>
 *      foo bar
 *    </SomeComponent>
 *  </Callout>
 *
 *  But this approach can be a good match for lots. See @demo/app/pages for example usage.
 * 
 */

const styles = theme => ({
  root: {
    backgroundColor: "#fafafa",
    width: 480,
    height: 440,
    overflow: "auto"
  },
  subheader: {
    borderBottom: "1px #ccc solid"
  }
});

// Quick & dirty... missing lots.
export default function withCallout(title) {
  return function WithCallout(WrappedComponent) {
    const Cmp = class WithCalloutExtended extends React.Component {
      render() {
        return (
          <List
            className={this.props.classes.root}
            subheader={
              <ListSubheader
                className={this.props.classes.subheader}
                component="div"
              >
                {title}
              </ListSubheader>
            }
          >
            <WrappedComponent {...this.props} />
          </List>
        );
      }
    };
    return withStyles(styles)(Cmp);
  };
}
