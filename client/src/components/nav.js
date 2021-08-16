import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (

        <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/today">Student Planner</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <Link to={'/today'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/today">Today</a>
                            </li>
                        </Link>
                        <Link to={'/timetable'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/timetable">Timetable</a>
                            </li>
                        </Link>
                        {/* <Link to={'/homework'}> */}
                            <li className="nav-item disabled">
                                <a className="nav-link disabled" aria-current="page" href="/homework">Homework</a>
                            </li>
                        {/* </Link> */}
                        <Link to={'/login'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/login">Login</a>
                            </li>
                        </Link>
                        <Link to={'/signup'}>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/signup">Sign Up</a>
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