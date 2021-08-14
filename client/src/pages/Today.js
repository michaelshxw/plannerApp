import React from 'react';
import AddClass from '../components/AddClass';

import Nav from '../components/Nav';
import TodayComponent from '../components/TodayComponent';

export default function Today() {
    return (
        <div className="appContainer bg-dark text-white">
            <div className="container">
                <Nav />
                <TodayComponent />
                <AddClass />
            </div>
        </div>
    )
}