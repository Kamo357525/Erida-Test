import React from 'react';
import Select from "react-select";
import { optionYear } from '@/store/helpers';
import { useCarsStore } from "@/store/car";
import './styles.css';

function Year(props) {
    const {
        filterYearMin,
        filerYearMax,
        setFilterYearMin,
        setFilterYearMax
    } = useCarsStore();

    const minOptions = optionYear.map(opt => ({
        ...opt,
        isDisabled: filerYearMax !== null && opt.value > filerYearMax
    }));

    const maxOptions = optionYear.map(opt => ({
        ...opt,
        isDisabled: filterYearMin !== null && opt.value < filterYearMin
    }));

    const style = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isDisabled
                ? '#444'
                : state.isSelected
                    ? '#000'
                    : state.isFocused
                        ? '#ddd'
                        : 'rgba(29,39,53,0.6)',
            color: state.isDisabled
                ? '#999'
                : state.isSelected
                    ? '#fff'
                    : 'white',
            width: '180px',
            cursor: state.isDisabled ? 'not-allowed' : 'pointer',
            padding: 10,
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            width: '180px',
            backgroundColor: 'rgba(29,39,53,0.6)',
            maxHeight: 'none',
            overflowY: 'visible',
        }),
        menuList: (provided) => ({
            ...provided,
            maxHeight: 'none',
            overflowY: 'visible',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'white',
            cursor: "pointer"
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
            cursor: "pointer"
        }),
        control: base => ({
            ...base,
            background: 'none',
            border: '3px solid rgba(29,39,53,1)',
            borderRadius: '10px',
            width: '180px',
            margin: '10px 0',
            boxShadow: "none",
            color: 'white'
        })
    };

    return (
        <div className='block'>
            <p className='titleYear'>Year</p>
            <div className='selects'>
                <div className='selects'>
                    <Select
                        styles={style}
                        placeholder="From"
                        options={minOptions}
                        value={minOptions.find(opt => opt.value === Number(filterYearMin)) || null}
                        onChange={(e) => {
                            if (!filerYearMax) {
                                return setFilterYearMin(e.value);
                            }
                            if (+e.value <= filerYearMax) {
                                setFilterYearMin(e.value);
                            }
                        }}
                    />
                </div>
                <p className='to'>-</p>
                <div>
                    <Select
                        styles={style}
                        placeholder="To"
                        options={maxOptions}
                        value={maxOptions.find(opt => opt.value === filerYearMax) || null}
                        onChange={(e) => {
                            if (!filterYearMin) {
                                return setFilterYearMax(e.value);
                            }
                            if (+e.value >= filterYearMin) {
                                setFilterYearMax(e.value);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Year;
