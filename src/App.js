import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { history } from "./components/_helpers/history";
import { Router } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TodosLayout from "./components/todos-page/TodosLayout";
import LoginPage from "./components/login-page/LoginPage";
import About from "./components/about/About";
import NotFoundPage from "./components/not-found/NotFoundPage";

import PrivateRoute from "./components/common/PrivateRoute";
import PublicRoute from "./components/common/PublicRoute";
import { Spinner } from "./globalStyles";

import GlobalStyle, { Container } from "./globalStyles";
// import uuid from 'uuid';

const App = (props) => {
  const { loggedIn } = props;

  return (
    <Router history={history}>
      <GlobalStyle />
      <Container>
        <Header />
        <Switch>
          <Route path="/about" render={() => <About history={history} />} />

          {loggedIn !== null ? (
            <PrivateRoute
              exact
              path="/app"
              component={TodosLayout}
              authenticated={loggedIn}
            />
          ) : null}

          {loggedIn !== null ? (
            <PublicRoute
              exact
              path="/"
              component={LoginPage}
              authenticated={loggedIn}
            />
          ) : null}
          {loggedIn === null ? (
            <Route
              render={() => (
                <Spinner
                  primary
                  fontSize="10px"
                  size="10em"
                  style={{ marginTop: "60px" }}
                />
              )}
            />
          ) : null}
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
};

App.propTypes = {
  loggedIn: PropTypes.any.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.user.loggedIn,
  };
}

export default connect(mapStateToProps)(App);
