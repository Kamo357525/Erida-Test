import React from 'react';
import './styles.css';

function NavigationInfo(props) {
    return (
        <div className='navigationBlock'>
            <p className='activeNavigation navInfo'>{'Home>'}</p>
            <p className='navigation navInfo'>Used cars</p>
        </div>
    );
}

export default NavigationInfo;