import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import './assets/scss/custom.scss';
import Dashboard from "./container/dashboard";
import {Provider} from "react-redux";
import {configureStore} from "./store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="" component={Dashboard}></Route>
        <Redirect to={'/'}/>
      </Router>
    </Provider>
  )
}

export default App;
