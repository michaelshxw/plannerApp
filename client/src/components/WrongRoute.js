import React from 'react';
import '../index.css'

export default function WrongRoute() {
    return (
        <div className="wrongRoute bg-dark text-white">
            <h3 className="wrongRouteText">Oh no!<br></br><br></br>This page doesn't exist. <br></br>Please check the URL and try again.</h3>
        </div>
    )
}