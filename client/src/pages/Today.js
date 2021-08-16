import React from 'react';

import Nav from '../components/Nav';
import TodayComponent from '../components/TodayComponent';

export default function Today() {
    return (
        <div className="appContainer text-dark">
            <div className="container">
                <Nav />
                <TodayComponent />
            </div>
        </div>
    )
}