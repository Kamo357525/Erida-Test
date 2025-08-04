import React from 'react';
import HomeCarList from "@/components/homeCarList";
import HomeCarFilter from "@/components/homeCarFilter";
import './styles.css'
import FilterInfo from "@/filterInfo";
import Footer from "@/components/footer";

function HomeBody(props) {
    return (
        <div>
            <FilterInfo/>
            <div className='homeBody'>
                <HomeCarFilter/>
                <HomeCarList/>
            </div>
        </div>
    );
}

export default HomeBody;