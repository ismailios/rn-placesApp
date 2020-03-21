import React from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import placesReducer from "./store/placesReducer";

import PlacesNavigator from "./navigation/PlacesNavigator";

import { init } from "./helpers/db";

init()
  .then(() => {
    console.log("initialized db");
  })
  .catch(err => {
    console.log("db Failled");
    console.log(err);
  });

export default function App() {
  const rootReducer = combineReducers({
    places: placesReducer
  });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );

  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
