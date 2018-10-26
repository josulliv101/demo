import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import { withThemeRoot } from "@demo/theme";
import { withStore } from "@demo/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppFrame from "./components/AppFrame";
import { Home, Menu, Photos, Posts, Users } from "./pages";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header {...this.props} />
          <AppFrame>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/users" component={Users} />
            <Route path="/posts" component={Posts} />
            <Route path="/photos" component={Photos} />
          </AppFrame>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  // TODO Loop of state looking for 'loading' properties
  isLoading:
    state.users.userList.loading === true ||
    state.posts.postList.loading === true
});

const withConnect = connect(mapStateToProps);

export default compose(
  withStore,
  withThemeRoot,
  withConnect
)(App);
