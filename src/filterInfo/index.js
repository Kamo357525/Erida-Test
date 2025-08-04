"use client";
import React, {useState} from 'react';
import {useCarsStore} from "@/store/car";
import './styles.css'

function FilterInfo() {
    const {
        filters,
        filtersData,
        setFilterCheckbox,
        setCheckboxFilterList,
        filterClear,
        filterCarsData
    } = useCarsStore();

    return (
        <div className='filterInfoBlock'>
            <div className='filterInfoBlock'>
                <p className='result'>Showing {filterCarsData.length} results</p>
                {filters.length > 0 && filters.map((filter) => (
                    <div key={filter.type} className='itemBlock'>
                        {filter.arguments.map((argument) => (
                            <div key={argument.argumentFilterId} className='itemFilterInfo'>
                                <p onClick={
                                    () => {
                                        filtersData.forEach((element) => {
                                            if (filter.id === element.filterId) {
                                                element.arguments.forEach((arg) => {
                                                    if (argument.argumentFilterId === arg.filterArgumentId) {
                                                        return setCheckboxFilterList(element, arg, false);
                                                    }
                                                })
                                            }
                                        });
                                        setFilterCheckbox(filter.id, argument.argumentFilterId, false);
                                    }
                                } className='close'>x</p>
                                <p>{argument.argument}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div>
                <p className='clear' onClick={() => filterClear()}>Clear all</p>
            </div>
        </div>
    );
}

export default FilterInfo;
