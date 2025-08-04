"use client"
import React from 'react';
import './styles.css'
import {useCarsStore} from "@/store/car";
import RadioInput from "../../components/checkbox/index";
import InputSearch from "@/components/inputSearch";
import CarMakeModelSelector from "@/components/select";
import {markFilter} from '@/store/helpers'
import Year from "@/components/year";
import Range from "@/components/sliderRange";
import Negotiated from "@/components/negotiated";
import Mileage from "@/components/mileage";


function HomeCarFilter(props) {

    const {
        filtersData,
        setFilterCheckbox,
        setCheckboxFilterList,
    } = useCarsStore();

    return (
        <div
            className='filterBlock'
        >
            <InputSearch/>
            <RadioInput inputList={filtersData[0]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
            <Year/>
            <CarMakeModelSelector />
            <Range/>
            <Negotiated/>
            <RadioInput inputList={filtersData[1]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
            <RadioInput inputList={filtersData[2]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
            <RadioInput inputList={filtersData[3]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
            {/*<Mileage/>*/}
            <RadioInput inputList={filtersData[4]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
            <RadioInput inputList={filtersData[5]} setValues={setFilterCheckbox} setCheckbox={setCheckboxFilterList}/>
        </div>
    );
}

export default HomeCarFilter;