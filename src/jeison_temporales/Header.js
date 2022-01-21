import React from 'react';
import memelogo from './pics/memelogo.png';

function Header () {
    return (
        <header className='header'>
            <div className='conten-header'>
                <img className='memelogo' src={memelogo} alt='logo'/>
                <h1 className='title'>MEME GENERADOR </h1>
                <h3 className='subtitle'>React Project</h3>
            </div>
        </header>
    )
}

export default Header