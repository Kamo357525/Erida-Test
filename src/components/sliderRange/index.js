import React, { useCallback, useEffect, useState } from "react";
import { Slider } from "@mui/material";
import debounce from "lodash/debounce";
import { useCarsStore } from "@/store/car";
import { price } from "@/store/helpers";
import './styles.css';

function valuetext(value) {
    return `${value} ֏`;
}

export default function PriceRangeSlider() {
    const { filterPrice, setFilterPrice } = useCarsStore();
    const [localPrice, setLocalPrice] = useState(price);       // For Slider
    const [startEnd] = useState(price);
    const [localInput, setLocalInput] = useState(price);     // For Inputs

    const debouncedApplyInput = useCallback(
        debounce((index, rawValue) => {
            const [min, max] = startEnd;
            const parsed = parseInt(rawValue, 10);
            if (isNaN(parsed)) return;

            const newPrice = [...localPrice];
            newPrice[index] = index === 0
                ? Math.max(parsed, min)
                : Math.min(Math.max(parsed, min), max);

            let from = Math.max(newPrice[0], min);
            let to = Math.min(newPrice[1], max);
            if (from > to) from = to;

            const clamped = [from, to];
            setLocalPrice(clamped);
            setFilterPrice(clamped);
        }, 500),
        [startEnd, localPrice, setFilterPrice]
    );

    const handleChange = (event, newValue) => {
        setLocalPrice(newValue);
        setLocalInput([String(newValue[0]), String(newValue[1])]);
    };

    const handleChangeCommitted = (event, newValue) => {
        setFilterPrice(newValue);
    };

    const handleInputChange = (index, value) => {
        const newInput = [...localInput];
        newInput[index] = value;
        setLocalInput(newInput);
        debouncedApplyInput(index, value);
    };

    const handleInputBlur = () => {
        const [min, max] = startEnd;
        let [from, to] = localInput.map(v => parseInt(v, 10));

        if (isNaN(from)) from = min;
        if (isNaN(to)) to = max;
        if (from < min) from = min;
        if (to > max) to = max;
        if (from > to) from = to;

        const clamped = [from, to];
        setLocalPrice(clamped);
        setFilterPrice(clamped);
        setLocalInput([String(clamped[0]), String(clamped[1])]);
    };

    // Sync from store
    useEffect(() => {
        if (filterPrice) {
            setLocalPrice(filterPrice);
            setLocalInput([String(filterPrice[0]), String(filterPrice[1])]);
        }
    }, [filterPrice]);

    useEffect(() => {
        return () => {
            debouncedApplyInput.cancel();
        };
    }, [debouncedApplyInput]);

    return (
        <div className='priceBlock'>
            <p className="titlePrice">Price</p>
            <Slider
                sx={{
                    color: "white",
                    height: 2.5,
                    "& .MuiSlider-thumb": {
                        width: 17,
                        height: 17,
                        backgroundColor: "black",
                        border: "4px solid currentColor",
                        "&:hover, &.Mui-focusVisible, &.Mui-active": {
                            boxShadow: "0px 0px 0px 8px rgba(25, 118, 210, 0.16)",
                        },
                    },
                    "& .MuiSlider-rail": {
                        opacity: 0,
                        backgroundColor: "red",
                    },
                    "& .MuiSlider-track": {
                        border: "none",
                    },
                    "& .MuiSlider-mark": {
                        backgroundColor: "#bfbfbf",
                        height: 8,
                        width: 1,
                        "&.MuiSlider-markActive": {
                            opacity: 1,
                            backgroundColor: "currentColor",
                        },
                    },
                }}
                getAriaLabel={() => "Price range"}
                value={[
                    isNaN(localPrice[0]) ? startEnd[0] : +localPrice[0],
                    isNaN(localPrice[1]) ? startEnd[1] : +localPrice[1],
                ]}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={startEnd[0]}
                max={startEnd[1]}
            />
            <div className='inputsBlock'>
                <div className='inputBlock'>
                    <p className='price'>$</p>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={localInput[0]}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                                handleInputChange(0, val);
                            }
                        }}
                        onBlur={handleInputBlur}
                    />
                </div>
                <p className='drob'>-</p>
                <div className='inputBlock'>
                    <p className='price'>$</p>
                    <input
                        type="text"
                        inputMode="numeric"
                        value={localInput[1]}
                        onChange={(e) => {
                            const val = e.target.value;
                            if (/^\d*$/.test(val)) {
                                handleInputChange(1, val);
                            }
                        }}
                        onBlur={handleInputBlur}
                    />
                </div>
            </div>
        </div>
    );
}
