import React from 'react';

export function AwardsItems(props) {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 p-2 b'>
                    {
                        props.awards.map((item, index) => {
                            return (
                                <div key={index} className='mb-3'>
                                    <div className='row'>
                                        <div className='col-md-12 col-12'>
                                            <u><h5 className='fs-5'>{item.id}-: {item.title}</h5></u>
                                            {item.date && (
                                                <p>
                                                    <strong>Date:</strong> {item.date}
                                                </p>
                                            )}
                                            {item.location && (
                                                <p>
                                                    <strong>Location:</strong> {item.location}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
