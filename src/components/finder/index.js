import React from 'react';
import './styles.css';
import {finder} from '@/data/data';

function Finder(props) {
    return (
        <div className='finder'>
            {finder.map((item, i) =>
                <div className='finderItem' key={i}>
                    <img src={item.icon} alt="settingImage" className='finderImg'/>
                    <p className='finderTitle'>{item.title}</p>
                </div>)}
        </div>
    );
}

export default Finder;