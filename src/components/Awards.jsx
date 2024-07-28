import React from 'react';
import awardsData from '../data/awards.json'; // Adjust the path to your awards data
import { AwardsItems } from './AwardItems';
function Awards() {
    const totalAwards = awardsData.awards.length;

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-8 p-2 b text-light'>
                    <div className='text-light '>
                        <h4 className='fs-1'>Honours and Awards</h4>
                    </div>
                    <hr className='' />
                    <AwardsItems awards={awardsData.awards} total={totalAwards}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;
