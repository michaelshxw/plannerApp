import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (

        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Student Planner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <Link to={'/'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Today</a>
                            </li>
                        </Link>
                        <Link to={'/timetable'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Timetable</a>
                            </li>
                        </Link>
                        <Link to={'/homework'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Homework</a>
                            </li>
                        </Link>
                        {/* <Link to={'/Settings'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Settings</a>
                            </li>
                        </Link> */}
                    </ul>
                </div>
            </div >
        </nav >

    );
}