"use client"
import React from 'react';
import './styles.css'

function RadioInput({inputList, setValues, setCheckbox}) {

    return (
        <div className='checkBoxHome'>
            <h3 className='checkBoxName'>
                {inputList.name}
            </h3>
            <div className='scroll-box'>
            {inputList.arguments.map((index, i) =>
                <div className='checkBox' key={i}>
                    <label className="custom-checkbox" htmlFor={index.name} style={{cursor:"pointer"}}>
                    <input
                        onChange={
                            (e) =>{
                                setCheckbox(inputList, index, e.target.checked, );
                                setValues(inputList.filterId, index.filterArgumentId,e.target.checked )
                                }
                    }
                        type="checkbox"
                        value={index.argument}
                        name={index.argument}
                        checked={index.checked}
                    />
                        <span className="checkmark"></span>
                    {index.argument}</label>
                </div>
            )}
                </div>
        </div>
    );
}

export default RadioInput;