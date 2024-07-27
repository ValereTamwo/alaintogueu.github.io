import React from 'react'
import data from '../data/data.json'


export function PulicItems(props) {
    let pubs = props.pub;

    return (
        
    <div className='container' >
              <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-8 p-2 b'>
                    {
                        pubs.map((items,index) => {
                            return (
                                <> 
                                <div className='container-fluid mb-3'>
                                <div className='row'>
                                    <div className='col-md-4 col-12'>
                                            <span className='badge bg-secondary '>{items.type}</span>
                                    </div>
                                            <div className='col-md-9 col-12'>
                                            <h5 className='fs-5 fw-bold'>N-{items.id}</h5>
                                            
                                            <h4 className='fs-5'>{items.title}</h4>
                                                <p>
                                                    {/* <h6 className='fw-bold'><u>{items.main_autor} , </u></h6> */}
                                                </p>
                                                <span>
                                                    <span className='fw-bold'><u>{items.main_autor} , </u></span>
                                                    {
                                                        items.sub_autor.map((author) => {
                                                            return (
                                                                <>
                                                                    {author.name}  ,    
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </span>
                                                <p><i>{items.journal}</i></p>
                                                <div className='container-fluid'>
                                                    <div className='row gap-4'>
                                                        <div className='col-3 '><button className='btn border border-1 border-white' data-bs-toggle='collapse' data-bs-target={`#${items.id}`}>Abstract</button></div>
                                                        <div className='col-3 '><button className='btn border border-1 border-white' ><a href={`${items.ref}` } className='nav-link'>HTML</a></button></div>

                                                    </div>
                                                    <div className='p-3 border border-1 border-light collapse' id={`${items.id}`}>
                                                        On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.
                                                         To save the BEF, an evacuation by sea was organised under the direction of Admiral Bertram Ramsay. Over nine days, warships of the Royal and French navie
                                                    </div>
                                                </div>        
                                    </div>
                                </div>
                                </div>
                                </>)
                        })
                    }
                    
                </div>
              </div>
        </div>
    )
}

export function PublicYear(props) {
    return (
        <>
      
        {
            props.public.map((year) => {
                return (
                    <>
                        <h3>{year.year}</h3>
                        <PulicItems pub={year.publication.reverse()} />
                        <hr/>
                    </>
                    )
            })
        }
                       
                     
                 
        <hr className=''/>
             
        </>
    )
    
}
function Publics() {
    const data1 = data.reverse()
  return (
      <>
          <div className='container'>
              <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-8 p-2 b text-light'>
                      <div className='text-light  p-4'>
                          <h4 className='fs-1   '>Publications</h4>
                          <p>   
                              For citation information, please visit my Google Scholar <a href='https://scholar.google.com/citations?user=vJq_pKAAAAAJ&hl=en&oi=ao'>page</a>.
                          </p>
                      </div>
                      <hr className='' />
                      <PublicYear public ={data1}/>
                </div>
              </div>
            </div>
      </>
  )
}

export default Publics