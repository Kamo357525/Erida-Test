import React from 'react';
import Image from "next/image";
import footerCar from '@/icons/fotterCar.png';
import footerSearch from '@/icons/fotterSearch.png';
import footerCopy from '@/icons/fotterCopy.png';
import footerInfo from '@/icons/Fotterserach.png';
import apple from '@/icons/Union.png';
import google from '@/icons/Google_Play-Icon-Logo.wine.svg';
import x from '@/icons/x.png';
import instagram from '@/icons/insta.png';
import fb from '@/icons/fb.png';
import './styles.css'

function footer(props) {
    return (
        <div className='footer'>
            <div className='infoBlock'>
                <div className='itemBlock'>
                    <Image src={footerCar} alt='car' className='infoIcon'/>
                    <p className='titleInfo'>Over 1 million listings</p>
                </div>
                <div className='itemBlock'>
                    <Image src={footerSearch} style={
                        {
                            width: '34px',
                            height: '34px'
                        }
                    } alt='car' className='infoIcon'/>
                    <p className='titleInfo'>Personalized search</p>
                </div>
                <div className='itemBlock'>
                    <Image src={footerCopy} alt='car' className='infoIcon'/>
                    <p className='titleInfo'>Online car appraisal</p>
                </div>
                <div className='itemBlock'>
                    <Image src={footerInfo} alt='car' className='infoIcon'/>
                    <p className='titleInfo'>Non-stop innovation</p>
                </div>

            </div>
            <div className='titles'>
                <div className='titlsBlock'>
                    <h1 className='titleName'> Buying & selling</h1>
                    <p className='titleItems'>Find a car</p>
                    <p className='titleItems'>Sell your car</p>
                    <p className='titleItems'>Car dealers</p>
                    <p className='titleItems'>Compare cars</p>
                    <p className='titleItems'>Online car appraisal</p>
                </div>

                <div className='titlsBlock'>
                    <h1 className='titleName'> About</h1>
                    <p className='titleItems'>About Finder</p>
                    <p className='titleItems'>Contact us</p>
                    <p className='titleItems'>FAQs & support</p>
                    <p className='titleItems'>Mobile app</p>
                    <p className='titleItems'>Blog & news</p>
                </div>
                <div className='titlsBlock'>
                    <h1 className='titleName'> Profile</h1>
                    <p className='titleItems'>My account</p>
                    <p className='titleItems'>Wishlist</p>
                    <p className='titleItems'>My listings</p>
                    <p className='titleItems'>Add listings</p>
                </div>
                <div className='titlsBlock'>
                    <h1 className='titleName'>Download our app</h1>
                    <p className='titleItems'>Download Finder App and join the community <br/> of car enthusiasts. </p>
                    <div className='socBlock'>
                        <div className='iconItems'>
                            <Image src={apple} alt={'apple'} className='iconsSoc iconGoogle'/>
                            <p className='iconName'>App Store</p>
                        </div>
                        <div className='iconItems'>
                            <Image src={google} alt={'google'} className=''/>
                            <p className='iconName '>Google Play</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='studioBlock'>
                <div className='studioTitleBlock'>
                    <p className='studioTitle'>© All rights reserved. Made by </p>
                    <p className='studioName'>Createx Studio</p>
                </div>
                <div>
                    <Image src={instagram} alt='instagram' className='studioIcon'/>
                    <Image src={fb} alt='fb' className='studioIcon'/>
                    <Image src={x} alt='x' className='studioIcon'/>
                </div>
            </div>
        </div>
    );
}

export default footer;