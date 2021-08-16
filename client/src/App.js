import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { setContext } from '@apollo/client/link/context';

//import pages
import Today from './pages/Today';
import Timetable from "./pages/Timetable";
import Homework from './pages/Homework';
import WrongRoute from "./components/WrongRoute";

//import apolloserver
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./components/Nav";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
            <Route exact path="/">
              <Today />
            </Route>
            <Route exact path="/today">
              <Today />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/timetable">
              <Timetable />
            </Route>
            <Route exact path="/homework">
              <Homework />
            </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
