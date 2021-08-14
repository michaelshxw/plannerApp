import React from 'react';
import { Link } from 'react-router-dom';

export default function TodayComponent() {
    const id = 2
    return (
        <div>
            <h2>Today's Classes: </h2>
            <section className="card">
                <ul className="list-group list-group-flush">
                    <Link to={`/class${id}`}>
                        <li className="list-group-item bg-primary text-white">Math</li>
                    </Link>
                    <Link to={`/class${id}`}>
                        <li className="list-group-item bg-danger text-white">Science</li>
                    </Link>
                    <Link to={`/class${id}`}>
                        <li className="list-group-item bg-warning text-white">Physics</li>
                    </Link>
                </ul>
            </section>
        </div>
    )

}
