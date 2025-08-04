import carData from "@/data/data";
import { v4 as uuidv4 } from 'uuid';
import {range} from "lodash";

const filterCheckboxValues=(key)=>{
    return [...new Set(carData.map(item => item[key]))]
        .map(bt => ({
            filterArgumentId:uuidv4(),
            argument: bt,
            checked: false
        }))
}

function generateMakeWithMarks(data) {
    const makes = [...new Set(data.map(car => car.make))];

    return makes.map(make => {
        const models = [
            ...new Set(data.filter(car => car.make === make).map(car => car.model))
        ];

        return {
            id: uuidv4(),
            label: make,
            checked: false,
            marks: models.map(model => ({
                id: uuidv4(),
                mark: model
            }))
        };
    });
}

function searchCars(data, searchArray) {
    const regexes = searchArray.map(term => new RegExp(term, 'i'));

    return data.filter(car =>
        regexes.every(regex =>
            regex.test(car.location) || regex.test(car.make) || regex.test(car.model)
        )
    );
}


const filterBodyType = {
    filterId:uuidv4(),
    type: 'body_type',
    name: 'Body types',
    arguments: filterCheckboxValues('body_type')
}

const filterDrivetrain = {
    filterId:uuidv4(),
    type: 'drivetrain',
    name: 'Drivetrain',
    arguments: filterCheckboxValues('drivetrain')
}

const filterFuelType= {
    filterId:uuidv4(),
    type: 'fuel_type',
    name: 'Fuel type',
    arguments: filterCheckboxValues('fuel_type')
}
const filterTransmission={
    filterId:uuidv4(),
    type: 'transmission',
    name: 'Transmission',
    arguments: filterCheckboxValues('transmission')
}

const filterColor={
    filterId:uuidv4(),
    type: 'color',
    name: 'Color',
    arguments: filterCheckboxValues( 'color')
}

const filterSellers={
    filterId:uuidv4(),
    type: 'seller_type',
    name: 'Seller type',
    arguments: filterCheckboxValues('seller_type')
}

const markFilter={
    filterId:uuidv4(),
    type: 'make',
    name: 'make',
    arguments: generateMakeWithMarks(carData)
}

const optionsMarkFilter=[];
markFilter.arguments.forEach((arg)=>(
    optionsMarkFilter.push({
        value:arg.label,
        label:arg.label
    }))
)

function SearchMaxMinPrice(carData, key) {
    if (!carData || carData.length === 0) return [null, null];

    let minPrice = carData[0][key];
    let maxPrice = carData[0][key];

    for (let car of carData) {

        if (car[key] <= minPrice) minPrice = car[key];
        if (car[key] >= maxPrice) maxPrice = car[key];
    }

    return [minPrice, maxPrice];
}

const year=SearchMaxMinPrice(carData, 'year');
const price=SearchMaxMinPrice(carData, 'price');

const infoPrice=range(year[0], year[1]+1, );
const optionYear=[];

infoPrice.forEach((arg)=>{
    optionYear.push({
        value:arg,
        label:arg
    })
})

const optionsSorting=[
    {value: "No Sorting", label:"No Sorting", key:null},
    {value: "By name", label:"By Name", keySorting:['make','asc']},
    {value: "Price Ascending", label:"Price Ascending", keySorting:['price','asc']},
    {value: "Price Descending", label:"Price Descending", keySorting:['price', 'desc']},
    {value: "Year Ascending", label:"Year Ascending" ,keySorting:['year', 'asc']},
    {value: "Year Descending", label:"Year Descending",keySorting:['year', 'desc']},
]



function sortCars(data, sortBy) {
    const sortKeys = Object.keys(sortBy);

    return data.slice().sort((a, b) => {
        for (let key of sortKeys) {
            const order = sortBy[key];

            if (a[key] !== b[key]) {
                if (typeof a[key] === 'string') {
                    return order === 'asc'
                        ? a[key].localeCompare(b[key])
                        : b[key].localeCompare(a[key]);
                }

                if (typeof a[key] === 'number') {
                    return order === 'asc'
                        ? a[key] - b[key]
                        : b[key] - a[key];
                }
            }
        }

        return 0; // all equal
    });
}

function filterMileage (carData, filter){
    const filtered = carData.filter(car => {
        const min = filter[0] ? Number(filter[0]) : null;
        const max = filter[1] ? Number(filter[1]) : null;

        if (min !== null && max !== null) {
            return car.mileage >= min && car.mileage <= max;
        } else if (min !== null) {
            return car.mileage >= min;
        } else if (max !== null) {
            return car.mileage <= max;
        }
        return true; // No filter applied
    });
    return filtered;
}


const defaultFilters=[
    filterBodyType,
    filterDrivetrain,
    filterFuelType,
    filterTransmission,
    filterColor,
    filterSellers
]

export {
    defaultFilters,
    searchCars,
    sortCars,
    filterMileage,
    markFilter,
    optionsMarkFilter,
    optionsSorting,
    optionYear,
    price
}