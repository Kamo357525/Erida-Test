import React from 'react';
import Select from "react-select";
import {optionsSorting} from "@/store/helpers";
import './styles.css'

function Sorting({setSorting}) {
    const style = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected
                ? '#000'
                : state.isFocused
                    ? '#ddd'
                    : ' rgba(29,39,53,60%)',
            color: state.isSelected ? '#fff' : 'white',
            width: '200px',
            cursor:'pointer',
            padding: 10,
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            width:'200px',
            backgroundColor: ' rgba(29,39,53,60%)'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
            cursor:"pointer"
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
            cursor:"pointer"
        }),
        control: base => ({
            ...base,
            background:'none',
            border: 0,
            width:'200px',
            margin:'10px 0',
            boxShadow: "none",
        })
    };

    return (
        <div>
            <Select options={optionsSorting} onChange={(e)=>setSorting(e.keySorting)} styles={style}/>
        </div>
    );
}

export default Sorting;