import React from 'react'
import img1 from '../images/citations.jpeg'
import img2 from '../images/p2.JPG'
import img3 from '../images/profil.jpg'
import img4 from '../images/p1.JPG'
import img5 from '../images/p3.JPG'
// import img6 from '../images/p5.JPG'


function Event() {
    return (
      <>
        <div className='container'>
              <div className='row d-flex justify-content-center'>
                  <div className='col-12 col-md-8 p-2 b text-light'>
                      <div className='text-light  p-4'>
                          <h4 className='fs-1   '>Gallery</h4>

                      </div>
                        <hr className='' />
                        <div className='container-fluid '>
                            <div className='row'>
                                <div className='col-4 p-2'>
                                    <p className='fw-bold'>Conferences : Nonlinear Physics</p>
                                </div>
                                 <div className='col-4 p-2'>
                                    <p className='date'>12-12-2020</p>
                                </div>
                                <div className='col-4 p-2'>
                                    <p className=''>Allemagne</p>
                                </div>
                            </div>

                        </div>
                        <div className='container-fluid '>
                            <div className='row'>
                                <div className='col-4 co p-3' style={{height:'200px'}} >
                                    <img className='img-fluid' src={img4} alt='img1' />
                                </div>
                                 <div className='col-4 p-3' style={{height:'200px'}}>
                                    <img className='img-fluid' src={img5} alt='img2' />
                                </div>
                                <div className='col-4 p-3' style={{height:'200px'}}>
                                    <img className='img-fluid' src={img2} alt='img3' />
                                </div>
                            </div>
                            

                        </div>
                        <hr className='mt-4' />
                        <div className='container-fluid '>
                            <div className='row'>
                                <div className='col-4 p-2'>
                                    <p className='fw-bold'>Conferences : Nonlinear Physics</p>
                                </div>
                                 <div className='col-4 p-2'>
                                    <p className='date'>12-12-2020</p>
                                </div>
                                <div className='col-4 p-2'>
                                    <p className=''>Allemagne</p>
                                </div>
                            </div>

                        </div>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-4 p-3' style={{height:'200px'}} >
                                    <img className='img-fluid' src={img1} alt='img1' />
                                </div>
                                 <div className='col-4 p-3' style={{height:'200px'}}>
                                    <img className='img-fluid' src={img2} alt='img2' />
                                </div>
                               
                            </div>
                            

                        </div>
                        <hr className='mt-4' />

                </div>
              </div>
            </div>
      </>
      
  )
}

export default Event