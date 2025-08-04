import React from 'react';
import {Carousel} from "react-responsive-carousel";
import {carImage} from '@/data/data';
import './styles.css'

function Index(props) {
    return (
        <div className='carouselBlock'>
            <Carousel showThumbs={true} autoPlay infiniteLoop showStatus={false} showIndicators={false}>
                {carImage.map((item, i) =>
                    <div key={i} className='photoBlock'>
                        <img src={item} alt='Slide' className='carPhotos'/>
                    </div>)}
                <div>
                </div>
            </Carousel>
        </div>
    );
}

export default Index;