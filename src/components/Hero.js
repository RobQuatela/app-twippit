import React from 'react';
import logo from '../twitter-logo.png';

export const Hero = () => {
    return (
        <div className="jumbotron">
            <div style={{display: 'flex', alignItems: 'center'}}>
                <img className="me-3" src={logo} alt="Twitter" height={50}/>
                <h1 className="display-4">Twippit</h1>

            </div>

            <p className="lead">Enter your user handle below to fetch your Twitter profile</p>
        </div>
    );
}
