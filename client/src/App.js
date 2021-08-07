import React from "react";
import Login from './components/login'
import Header from './components/header'
import {
  ApolloClient, 
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const httpLink = createHttpLink({
  uri: '/graphql',
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <Login />
    </ApolloProvider>
  );
}

export default App;