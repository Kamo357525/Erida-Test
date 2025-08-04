import React from 'react';
import './styles.css'
import Image from "next/image";
import herat from '@/icons/Vector (1).png';
import share from '@/icons/fotterCopy.png';
import Carousel from "@/components/carousel";
import Specifications from "@/components/specifications";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Finder from "@/components/finder";
import Features from "@/components/features";
import Description from "@/components/description";
import Intersend from "@/components/intersend";
import UserInfo from "@/components/userInfo";

function ItemBody({car}) {
    return (
        <div>
            <div className='carInfoTitle'>
                <div className='carInfoItem'>
                    <h1 className='bodyTitle'>{car.make + ' ' + car.model}</h1>
                    <p className='bodyTitleYear'>{'('+car.year+')'}</p>
                </div>
                <div className='titleIcons'>
                    <Image className='titleIcon' src={herat} alt={herat}/>
                    <Image className='titleIcon' src={share} alt={share}/>
                </div>
            </div>
            <div className='bodyItem'>
                <div className='carInfo'>
                    <Carousel carPhotos={car.photos}/>
                    <Specifications car={car}/>
                    <Finder/>
                    <Features/>
                    <Description/>
                </div>
                <div className='userInfo'>
                    <UserInfo car={car}/>
                </div>
            </div>
            <div>
                <Intersend car={car}/>
            </div>
        </div>
    );
}

export default ItemBody;