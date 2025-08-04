import React, { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';
import {useCarsStore} from "@/store/car";
import {Switch} from "@mui/material";
import './styles.css'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Negotiated() {
    const { filterNegotiated, setFilterNegotiated } = useCarsStore();
    const [localChecked, setLocalChecked] = useState(filterNegotiated);

    const debouncedSetFilter = React.useMemo(() =>
        debounce(setFilterNegotiated, 100), [setFilterNegotiated]);

    const handleChange = (e) => {
        setLocalChecked(e.target.checked);
        debouncedSetFilter(e.target.checked);
    };

    useEffect(() => {
        setLocalChecked(filterNegotiated);
    }, [filterNegotiated]);

    return (
        <div className='negotiated'>
            <Switch
                sx={{
                    '& .MuiSwitch-switchBase': {
                        color: 'white',
                        transition:1,
                        '&.Mui-checked': {
                            color: 'white',
                        },
                    },
                    '& .MuiSwitch-track': {
                        backgroundColor: 'gray',
                        opacity: 1,
                        '&.Mui-checked': {
                            backgroundColor: 'blue',
                        },
                    },
                }}
                {...label}
                checked={localChecked}
                onChange={handleChange}
            />
            <p className='negotiatedTitle'>Negotiated price</p>
        </div>
    );
}

export default Negotiated;