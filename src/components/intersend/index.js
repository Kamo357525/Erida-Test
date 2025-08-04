import React from 'react';
import carData from "@/data/data";
import InterestedItem from "@/components/intersend/interestedItem";
import './styles.css'

function Interested({car}) {
    const amplitude=(car.price/10);
    const filterData=[];

    carData.forEach((item, i)=>{
            if(filterData.length>3){
                return
            }
            if(item.price>=car.price-amplitude && item.price<=car.price+amplitude && car.id!==item.id){
                filterData.push(item)
            }
        })
    return (
        <div className='carsBlock'>
            {filterData.length?<h1>You may be interested in</h1>:null}
            <div className='cars'>
                {filterData.map((item, i)=><InterestedItem car={item} key={i}/>)}
            </div>
        </div>
    );
}

export default Interested;