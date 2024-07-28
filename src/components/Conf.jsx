import React from 'react';
import data from '../data/conf.json';

export function ConferenceItems(props) {
    return (
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 p-2 b'>
                    {
                        props.talks.map((item, index) => {
                            const talkNumber = props.total - index;
                            return (
                                <>
                                    <div className=' mb-3'>
                                        <div className='row'>
                                            <div className='col-md-4 col-12'>
                                                <span className='badge bg-secondary '>{item.type}</span>
                                            </div>
                                            <div className='col-md-9 col-12'>
                                                <h4 className='fs-5'>{talkNumber}. {item.title}</h4>
                                                {item.author && <p>{item.author}</p>}

                                                <p>
                                                    <h6 className='fw-bold'><u>{item.event}</u></h6>
                                                </p>
                                                <p>{item.location}</p>
                                                <p>{item.date}</p>
                                                {item.ref && (
                                                    <p><u><a href={item.ref} className='nav-link text-warning'>{item.name}</a></u></p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

function ConferenceTalks() {
    const totalTalks = data.conference_talks.length;
    return (
        <>
            <div className='container'>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 col-md-8 p-2 b text-light'>
                        <div className='text-light p-4'>
                            <h4 className='fs-1'>Conference Talks and Posters</h4>
                        </div>
                        <hr className='' />
                        <ConferenceItems talks={data.conference_talks} total={totalTalks}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConferenceTalks;
