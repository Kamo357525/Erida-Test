import React from 'react';
import './styles.css';

function Specifications({car}) {
    return (
        <div className='specificationsBlock'>
            <h1 className='specificationsTitle'>Specifications</h1>
            <div className='itemsBlock'>
                <div className='items'>
                    <div className='itemBlock'><p className='itemKey'>Manufacturing year:</p><p className='itemValue'>&ensp;{+car.year}</p></div>
                    <div className='itemBlock'><p className='itemKey'>Mileage:</p><p className='itemValue'>&ensp;{car.mileage}</p></div>
                    <div className='itemBlock'><p className='itemKey'>Body type:</p><p className='itemValue'>&ensp;{car.body_type}</p></div>
                    <div className='itemBlock'><p className='itemKey'>Drive type:</p><p className='itemValue'>&ensp;{car.drivetrain}</p></div>
                    <div className='itemBlock'><p className='itemKey'>Engine:</p><p className='itemValue'>&ensp;6-Cylinder Turbo</p></div>
                    <div className='itemBlock'><p className='itemKey'>Transmission:</p><p className='itemValue'>&ensp;{car.transmission}</p></div>
                </div>
                <div className='items'>
                    <div className='itemBlock'><p className='itemKey'>Fuel type:</p><p className='itemValue'>&ensp;{car.fuel_type}</p></div>
                    <div className='itemBlock'><p className='itemKey'>City MPG:</p><p className='itemValue'>&ensp;20</p></div>
                    <div className='itemBlock'><p className='itemKey'>Highway MPG:</p><p className='itemValue'>&ensp;29</p></div>
                    <div className='itemBlock'><p className='itemKey'>Exterior color:</p><p className='itemValue'>&ensp;{car.color}</p></div>
                    <div className='itemBlock'><p className='itemKey'>Interior color:</p><p className='itemValue'>&ensp;{car.color}</p></div>
                    <div className='itemBlock'><p className='itemKey'>VIN</p><p className='itemValue'>&ensp; 2VW821AU9JM754284</p></div>
                </div>
            </div>
        </div>
    );
}

export default Specifications;