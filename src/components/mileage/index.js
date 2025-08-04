import React, { useState, useEffect, useMemo } from 'react';
import { useCarsStore } from "@/store/car";
import debounce from 'lodash/debounce';
import './styles.css'

function Mileage() {
    const {
        filterMileage,
        setFilterMileage
    } = useCarsStore();

    const [localMileage, setLocalMileage] = useState(filterMileage ?? ["", ""]);

    const setMileage = (index, value) => {
        const onlyNumbers = value.replace(/\D/g, '');
        const newMileage = [...localMileage];
        newMileage[index] = onlyNumbers;
        setLocalMileage(newMileage);
    };

    useEffect(() => {
        setLocalMileage(filterMileage ?? ["", ""]);
    }, [filterMileage]);

    const debouncedSetFilterMileage = useMemo(
        () =>
            debounce((rawValue) => {
                let [min, max] = rawValue;

                if (
                    min !== '' &&
                    max !== '' &&
                    parseInt(min) > parseInt(max)
                ) {
                    max = min;
                }

                setFilterMileage([min, max]);
            }, 500),
        [setFilterMileage]
    );

    useEffect(() => {
        debouncedSetFilterMileage(localMileage);
        return () => debouncedSetFilterMileage.cancel();
    }, [localMileage, debouncedSetFilterMileage]);

    return (
        <div>
            <p className='mileageTitle'>Mileage</p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                    type="text"
                    className="input"
                    value={localMileage[0]}
                    onChange={(e) => setMileage(0, e.target.value)}
                    placeholder="Min"
                />
                <p>-</p>
                <input
                    type="text"
                    className="input"
                    value={localMileage[1]}
                    onChange={(e) => setMileage(1, e.target.value)}
                    placeholder="Max"
                />
            </div>
        </div>
    );
}

export default Mileage;
