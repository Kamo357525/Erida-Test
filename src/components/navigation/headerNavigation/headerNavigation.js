import React from 'react';
import Link from 'next/link';
import './styles.css';


function HeaderNavigation(props) {

    return (
        <nav className='headerNavBlock'>
            <Link href="/newCars" className='titleHeader'>
                <div className='itemsHeader'>
                    <p>
                        New cars
                    </p>
                    <p className='itemIcon'>
                        ⌄
                    </p>
                </div>
            </Link>
            <Link href="/usedCars" className='titleHeader'>
                <div className='itemsHeader'>
                    <p>
                        Used cars
                    </p>
                    <p className='itemIcon'>
                        ⌄
                    </p>
                </div>
            </Link>
            <Link href="/onlineAppraisal" className='titleHeader'>
                <div className='itemsHeader'>
                    <p>
                        Online appraisal
                    </p>
                </div>
            </Link>
            <Link href="/dealers" className='titleHeader'>
                <div className='itemsHeader'>
                    <p>
                        Dealers
                    </p>
                    <p className='itemIcon'>
                        ⌄
                    </p>
                </div>
            </Link>
            <Link href="/contact" className='titleHeader'>
                <div className='itemsHeader'>
                    <p>
                        Contact
                    </p>
                </div>
            </Link>
        </nav>
    );
}

export default HeaderNavigation;