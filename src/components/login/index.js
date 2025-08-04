import React from 'react';
import userLogo from '@/icons/user.png';
import moonLogo from '@/icons/Vector.png';
import './styles.css'
import Image from "next/image";

function Login(props) {
    return (
        <div className='userBlock'>
            <div>
                <Image src={moonLogo} className='icon' alt='moon'/>
                <Image src={userLogo} className='icon' alt='user'/>
            </div>
            <div className='sell'>
                <p className='sellAdd, add'>+</p>
                <p  className='sellAdd'>Sell car</p>
            </div>

        </div>
    );
}

export default Login;