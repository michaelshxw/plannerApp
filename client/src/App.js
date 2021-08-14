import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//import pages
import Dashboard from './pages/Dashboard'
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

import { setContext } from '@apollo/client/link/context';
import { useState } from "react";

const httpLink = createHttpLink({
    uri: '/graphql',
});
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Today} />
                    {/* <Route exact path='/dashboard' component={Dashboard} /> */}
                    <Route exact path='/timetable' component={Timetable} />
                    <Route exact path='/homework' component={Homework} />
                    <Route render={() => <WrongRoute />} />
                </Switch>
            </Router>
        </ApolloProvider>
    )
}

export default App;