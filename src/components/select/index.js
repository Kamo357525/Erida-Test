import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import {optionsMarkFilter, markFilter} from '@/store/helpers';
import {useCarsStore} from "@/store/car";
import './styles.css';

function Index() {
    const {filterMark, filerModel, setFilterMark, setFilerModel} = useCarsStore();
    const [modelOption, setModelOption] = useState([]);

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
            width: '100%',
            cursor: state.isDisabled ? 'not-allowed' : 'pointer',
            padding: 10,
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 9999,
            width: '100%',
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
            width: '100%',
            margin: '10px 0',
            boxShadow: "none",
            color: 'white'
        })
    };

    useEffect(() => {
        if (filterMark) {
            const selectedMark = markFilter.arguments.find((arg) => arg.label === filterMark);
            if (selectedMark) {
                const modalOptionArr = selectedMark.marks.map((arg) => ({
                    value: arg.mark,
                    label: arg.mark
                }));
                setModelOption(modalOptionArr);
            } else {
                setModelOption([]);
            }
        } else {
            setModelOption([]);
        }

        setFilerModel(null);
    }, [filterMark]);

    return (
        <div className='selectBlock'>
            <p className='titleMark'>Make and model</p>
            <Select
                options={optionsMarkFilter}
                styles={style}
                value={optionsMarkFilter.find(opt => opt.value === filterMark) || null}
                placeholder='Any mark'
                onChange={(e) => setFilterMark(e?.value || null)}
            />
            <Select
                options={modelOption}
                styles={style}
                placeholder='Any model'
                value={modelOption.find(opt => opt.value === filerModel) || null}
                onChange={(e) => setFilerModel(e?.value || null)}
                isDisabled={modelOption.length === 0}
            />
        </div>
    );
}

export default Index;
