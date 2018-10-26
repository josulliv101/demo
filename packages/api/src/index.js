import React, { Component } from "react";
import unfetch from "unfetch";

const makeEndpoint = domain => path =>
  unfetch(`${domain}${path}`).then(resp => resp.json());

const fetch = makeEndpoint("https://jsonplaceholder.typicode.com");

export const fetchUserList = () => fetch("/users");

export const fetchPostList = () => fetch("/posts");

export const fetchPostListForUser = ({ userId }) =>
  fetch(`/users/${userId}/posts`);

// Over simplified fetch HOC
export function withFetch(fn) {
  return function HOCFactory(WrappedComponent) {
    return class HOC extends React.Component {
      triggerActions() {
        if (typeof fn === "function") {
          fn(this.props);
        }
      }

      componentDidMount() {
        this.triggerActions();
      }

      componentWillUnmount() {
        // Handle cancelling of fetch here
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  };
}
