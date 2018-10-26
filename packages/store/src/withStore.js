import React from "react";
import { Provider } from "react-redux";
import createStore from "./createStore";

function withStore(Component) {
  function withStoreEnhanced(props) {
    const store = createStore();
    return (
      <React.StrictMode>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </React.StrictMode>
    );
  }

  return withStoreEnhanced;
}

export default withStore;
