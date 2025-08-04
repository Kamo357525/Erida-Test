import React from 'react';
import './styles.css';
import {features} from "@/data/data";
import FeaturesItem from "@/components/features/featuresItem";

function Features(props) {
    return (
        <div>
            <h1 className='featuresTitle'>Features</h1>
            {features.map((item, i)=><FeaturesItem features={item} key={i} />)}
        </div>
    );
}

export default Features;