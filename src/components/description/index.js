import React, {useState} from 'react';
import {userDescription} from "@/data/data";
import './styles.css'; // make sure to import your css file

function Index(props) {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 400;

    const description = userDescription.description || "";

    const toggleExpanded = () => setIsExpanded(!isExpanded);

    const shouldTruncate = description.length > MAX_LENGTH;
    const displayedText = isExpanded || !shouldTruncate
        ? description
        : description.slice(0, MAX_LENGTH) + '...';

    return (
        <div className='descriptionBlock'>
            <div>
                <h1>Seller's description</h1>
                <p className='description'>{displayedText}</p>
                {shouldTruncate && (
                    <button
                        className="show-more-btn"
                        onClick={toggleExpanded}
                    >
                        {isExpanded ? 'Show less' : 'Show more'}
                    </button>
                )}
            </div>
            <div className='info'>
                <div className='infoItem'><p className='infoKey'>Published:</p> <p className='infoVal'>&ensp;{userDescription.published}</p></div>
                <p className='droob'>|</p>
                <div className='infoItem'><p className='infoKey'>Ad number:</p> <p className='infoVal'>&ensp;{userDescription.adNumber}</p></div>
                <p className='droob'>|</p>
                <div className='infoItem'><p className='infoKey'>Views</p> <p className='infoVal'>&ensp;{userDescription.views}</p></div>
            </div>
        </div>
    );
}

export default Index;
