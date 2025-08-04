import React from 'react';
import Image from "next/image";
import Link from "next/link";
import './styles.css'
import carPhoto from '@/icons/carPhoto.jpg';
import vectorSlack from "@/icons/Vector (3).png";
import vectorHead from "@/icons/Vector (1).png";
import vectorNotification from "@/icons/Vector (2).png";
import location from "@/icons/location.png";
import mil from "@/icons/milage.png";
import diesel from "@/icons/disel.png";
import manul from "@/icons/manual.png";

function InterestedItem({car}) {

    return (
        <Link href={`/carinfo/${car.id}`} className='carBlockInters'>
            <div className='carPhotoBlock'>
                <Image src={carPhoto} alt='carPhoto' className='carImageInters'/>
            </div>
            <div className='infoBlockItems'>
                <div className='date'>
                    <div>
                        <p className='dateItem'>30/09/2024</p>
                    </div>
                    <div className='icons'>
                        <div className='iconBlock'>
                            <Image className='iconImageInterested' src={vectorSlack}  alt='slack'/>
                        </div>
                        <div className='iconBlock'>
                            <Image className='iconImageInterested' src={vectorHead} alt='head'/>
                        </div>
                        <div className='iconBlock'>
                            <Image className='iconImageInterested' src={vectorNotification} alt='notification'/>
                        </div>
                    </div>

                </div>
                <div className='markModel'>
                    <p className='markModelTitle'>{car.make + ' ' + car.model}</p>
                    <p className='markModelYear'>{'(' + car.year + ')'}</p>
                </div>
                <div className='priceInterestedItem'>
                    <p>{'$' + car.price}</p>
                </div>
                <div className='infoInterested'>
                    <div>
                        <div className='iconInfoBlockInterested'>
                            <Image className='iconImageInterested' src={location} alt='location'/>
                            <p>{car.location}</p>
                        </div>
                        <div className='iconInfoBlockInterested'>
                            <Image className='iconImageInterested' src={mil} alt='mileage'/>
                            <p>{car.mileage + 'mi'}</p>
                        </div>
                    </div>
                    <div className='mileage'>
                        <div className='iconInfoBlockInterested'>
                            <Image className='iconImageInterested' src={diesel} alt='drivetrain'/>
                            <p>{car.fuel_type}</p>
                        </div>
                        <div className='iconInfoBlockInterested'>
                            <Image className='iconImageInterested' src={manul} alt='transmission'/>
                            <p>{car.transmission}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>


    );
}

export default InterestedItem;