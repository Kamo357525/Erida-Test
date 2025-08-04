'use client';
import React, { useEffect, useState } from 'react';
import './styles.css';
import Image from "next/image";
import carPhoto from '@/icons/carPhoto.jpg';
import Link from "next/link";
import { useCarsStore } from '@/store/car';
import Paginatin from "@/components/paginatin";
import vectorHead from '@/icons/Vector (1).png';
import vectorNotification from '@/icons/Vector (2).png';
import vectorSlack from '@/icons/Vector (3).png';
import manul from '@/icons/manual.png';
import location from '@/icons/location.png';
import mil from '@/icons/milage.png';
import diesel from '@/icons/disel.png';
import {searchCars, sortCars, filterMileage as filterMileageHelpers} from '@/store/helpers';
import Sorting from "@/components/sorting";

function HomeCarList() {

    const [sorting, setSorting]=useState(null);
    const {
        cars,
        filters,
        setFilterCarsData,
        filterSearch,
        filterMark,
        filerModel,
        filterYearMin,
        filerYearMax,
        filterPrice,
        filterNegotiated,
        filterMileage
    } = useCarsStore();

    function filterCars(cars, filters) {
        return cars.filter((car) => {
            return filters.every((filter) => {
                const carValue = car[filter.type];
                const allowedValues = filter.arguments.map(arg => arg.argument);
                return allowedValues.includes(carValue);
            });
        });
    }

    let filterData = filters.length ? filterCars(cars, filters) : cars;

    if (filterSearch.length) {filterData = searchCars(filterData, filterSearch)}
    if (filterMark) {filterData = filterData.filter(car => car.make === filterMark)}
    if (filerModel) {filterData = filterData.filter(car => car.model === filerModel)}
    if (filterNegotiated) {filterData = filterData.filter(car => car.negotiable_price)}
    if (filterYearMin) {filterData = filterData.filter(car => car.year >= filterYearMin)}
    if (filerYearMax) {filterData = filterData.filter(car => car.year <= filerYearMax)}
    if (filterMileage.length) {filterData=filterMileageHelpers(filterData, filterMileage)}
    if (filterPrice) {filterData = filterData.filter(car => car.price >= filterPrice[0] && car.price <= filterPrice[1])}
    if(sorting){filterData=sortCars(filterData, {[sorting[0]]:sorting[1]})}

    const [pagination, setPagination] = useState({
        activePage: 1,
        pageCount: Math.ceil(filterData.length / 10)
    });

    useEffect(() => {
        setFilterCarsData(filterData);
        const newPageCount = Math.ceil(filterData.length / 10);
        setPagination((prev) =>
            prev.pageCount === newPageCount
                ? prev
                : { activePage: 1, pageCount: newPageCount }
        );
    }, [filterData.length]);

    return (
        <div className='carListBlock'>
            <Sorting setSorting={setSorting}/>
            <nav>
                {filterData.length ? (
                    filterData.map((car, index) => {
                        if (
                            pagination.activePage * 10 >= index + 1 &&
                            pagination.activePage * 10 - 10 < index + 1
                        ) {
                            return (
                                <Link href={`/carinfo/${car.id}`}  key={car.id} prefetch={false}>
                                    <div className='carItem'>
                                        <Image className='carImage' src={carPhoto} alt='image' />
                                        <div className='titleBlock'>
                                            <div className='dateBlock'>
                                                <div className='date'>
                                                    <p className='dateItem'>27/05/2024</p>
                                                </div>
                                                <div className='icons'>
                                                    <div className='iconBlock'><Image className='iconImage' src={vectorSlack} alt='slack' /></div>
                                                    <div className='iconBlock'><Image className='iconImage' src={vectorHead} alt='head' /></div>
                                                    <div className='iconBlock'><Image className='iconImage' src={vectorNotification} alt='notification' /></div>
                                                </div>
                                            </div>
                                            <div className='markBlock'>
                                                <p className='markInfo'>{car.make + ' ' + car.model}</p>
                                                <p className='carYear'>({ car.year})</p>
                                            </div>
                                            <div>
                                                <p className='price'>{'$' + car.price}</p>
                                            </div>
                                            <p className='titleCar'>
                                                An iconic off-road legend, known for its rugged durability, timeless design, and unmatched capability. Built to conquer any terrain.
                                            </p>
                                            <div className='iconsInfo'>
                                                <div className='iconInfoBlock'><Image className='iconImage' src={location} alt='location' /><p>{car.location}</p></div>
                                                <div className='iconInfoBlock'><Image className='iconImage' src={mil} alt='mileage' /><p>{car.mileage + 'mi'}</p></div>
                                                <div className='iconInfoBlock'><Image className='iconImage' src={diesel} alt='drivetrain' /><p>{car.drivetrain}</p></div>
                                                <div className='iconInfoBlock'><Image className='iconImage' src={manul} alt='transmission' /><p>{car.transmission}</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        }
                        return null;
                    })
                ) : (
                    <p className='noResult'>No Results</p>
                )}
            </nav>
            <Paginatin pagination={pagination} setPagination={setPagination} />
        </div>
    );
}

export default HomeCarList;
