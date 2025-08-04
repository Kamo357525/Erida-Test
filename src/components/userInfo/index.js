import React, {useState} from 'react';
import Image from "next/image";
import location from "@/icons/location.png";
import mil from "@/icons/milage.png";
import diesel from "@/icons/disel.png";
import manul from "@/icons/manual.png";
import star from '@/icons/star.png';
import email from '@/icons/email.png'
import {user} from "@/data/data";
import './styles.css';

function UserInfo({car}) {

    const [check,setCheck]=useState(true)
    return (
        <div>
            <div className='verifiedBlock'>
                <div className='used'>
                    <p className='verifiedTitle'>Used</p>
                </div>
                <div className='verified'>
                    <p className='verifiedTitle'>Verified</p>
                </div>
            </div>
            <div className='price'>
                <h1 className='price'>{'$' + car.price}</h1>
            </div>
            <div className='infoInterestedUser'>
                <div className='iconInfoBlockInterested'>
                    <Image className='iconImageInterested' src={location} alt='location'/>
                    <p>{car.location}</p>
                </div>
                <div className='iconInfoBlockInterested'>
                    <Image className='iconImageInterested' src={mil} alt='mileage'/>
                    <p>{car.mileage + 'mi'}</p>
                </div>


                <div className='iconInfoBlockInterested'>
                    <Image className='iconImageInterested' src={diesel} alt='drivetrain'/>
                    <p>{car.fuel_type}</p>
                </div>
                <div className='iconInfoBlockInterested'>
                    <Image className='iconImageInterested' src={manul} alt='transmission'/>
                    <p>{car.transmission}</p>
                </div>
            </div>
            <div className='userInfoBlock'>
                <div className='userBlock'>
                    <div className='userPhotBlock'>
                        <img src={user.imagePath} className='userPhoto'/>
                    </div>
                    <div className='starBlock'>
                        <div className='userName'>
                            <p className='userNameTitle'>{user.lName+' '+user.fName}</p>
                        </div>
                        <div className='star'>
                            <div className='ratingBlock'>
                                <div>
                                    <Image src={star} className='star' alt='star'/>
                                </div>
                                <div className='rating'>
                                    <p className='ratingItem'>{user.rating}</p>
                                </div>
                                <div className='ratingCount'>
                                    <p className='ratingCountItem'>(5 reviewes)</p>
                                </div></div>
                        </div>
                    </div>
                    {user.private? <div className='private'>
                        <p className='privateTitle'>Private seller</p>
                    </div>:null}
                </div>
                <div className='otherPrivateBlock'>
                    <p className='otherPrivate'>{'Other ads by this seller'+ '      >'}</p>
                </div>
                <div className='telephoneNumber'>
                    <div className='telephone'>
                        <p className='telephoneTitle'>{user.telephone.replace(/(\(\d{3}\))\d+/, (_, areaCode) => `${areaCode}`)}</p>
                        <p className="num">*******</p>
                        <p className="telephoneTitle">-reveal</p>
                    </div>
                    <div className='email'>
                        <Image src={email} alt={'email'} className={'emailPhoto'}/>
                        <p>Send email</p>
                    </div>

                </div>
            </div>
            <div className='subscribe'>
                <div className='subscribeTitle'>
                    <p>Email me price drops and new listings for<br/> these search results:</p>
                </div>
                <div className='subscribeMail'>
                    <div className='subscribeInput'>
                        <Image src={email} alt={'email'} className={'emailPhoto'}/>
                        <input placeholder='Your email' type="text" name=""  className='inp'/>
                    </div>
                    <div className='subscribeBtn'>
                        <p>Subscribe</p>
                    </div>
                </div>
                <div className='agree'>
                    <div className='agreeCheckbox'>
                        <div className='checkBox' >
                            <label className="custom-checkbox" h style={{cursor:"pointer"}}>
                                <input
                                    onChange={()=>setCheck(!check)}
                                    checked={check}
                                    type="checkbox"
                                />
                                <span className="checkmark"></span>
                                <div className='checkboxTitle'><p>I agree to receive price drop alerts on this vehicle and helpful shopping information.</p>
                                </div>
                                </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;