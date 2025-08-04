import React from 'react';
import './styles.css'
import Logo from "@/components/logo";
import HeaderNavigation from "@/components/navigation/headerNavigation/headerNavigation";
import Login from "@/components/login";
import NavigationInfo from "@/components/navigationInfo";
import Link from "next/link";

function header(props) {
    return (<div>
            <div className='headerBody'>
                <Link href={'/'}>
                    <Logo/>
                </Link>
                <HeaderNavigation/>
                <Login/>
            </div>
            <NavigationInfo/>
        </div>

    );
}

export default header;