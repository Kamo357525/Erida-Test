import React, {useState} from 'react';
import './styles.css'

function FeaturesItem({features}) {
    const [open, setOpen]=useState(false);
    return (
        <div className='categoryBlock'>
            <div className='category'>
                <p className='categoryTitle'>{features.category}</p>
                <p onClick={()=>setOpen(!open)} className='isOpen'>{open?'-':'+'}</p>
            </div>
            {open?  <ul className='itemsList'>
                {features.items.map((item, i )=><li key={i}>{item}</li>)}
            </ul>:null}
        </div>
    );
}

export default FeaturesItem;