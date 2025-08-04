"use client"
import React, {useCallback, useEffect, useState} from 'react';
import {useCarsStore} from "@/store/car";
import './styles.css'
import debounce from "lodash/debounce";

function InputSearch(props) {
    const {
        setFilterSearch,
        filterSearch
    } = useCarsStore();

    const [val, setInputVal] = useState(filterSearch);

    const handleSearch = (value) => {
        setFilterSearch(toArray(value))
    };

    const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

    useEffect(() => {
        return () => {
            debouncedSearch.cancel();
        };
    }, [debouncedSearch]);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputVal(value);
        debouncedSearch(value);
    };

    useEffect(() => {
        const val=filterSearch.join(" ")
        setInputVal(val)
    }, [filterSearch.length]);

    const toArray=(string)=>{
        let str = (string).trim().replace(/^['"]|['"]$/g, '');
        str = str.split(/\s+/);
        return str
    }


    return (
        <div className='searchBlock'>
            <input
                className='input'
                onChange={(e) => {
                    handleChange(e)
                }}
                placeholder='     Search'
                type="text"
                id="name"
                value={val}
            />
        </div>
    );
}

export default InputSearch;