import React from 'react';
import heroImage from '../../../public/assets/images/retreat_cave.jpg'
const Header = () => {
    return (
        <div className='hero'>
            <img className = "hero__image" src= {heroImage} />
        </div>
    );
};

export default Header;