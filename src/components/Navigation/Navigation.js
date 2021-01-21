import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn, toggleModal }) => {
    if(isSignedIn) {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <h1>Smart Face</h1> 
                <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
            </nav>
        );
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <h1>Smart Face</h1> 
                <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;