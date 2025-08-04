import React from 'react';
import LogoImage from '@/icons/logoImage.png'
import Image from "next/image";
import  './styles.css';

function Logo(props) {
    return (
        <div className='logoBody'>
            <Image
                className='logoImage'
                src={LogoImage}
                alt="Logo"
            />
            <p className='titleLogo'>Finder</p>
        </div>
    );
}

export default Logo;