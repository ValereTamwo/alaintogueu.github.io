import React from 'react'

function Header() {
    const style = [
        {
            "backgroundColor":'#1F1B43'
        }
    ]
  return (
      <>
          <header className='container-fluid navbar navbar-expand-lg p-2  bg-secondary  border-bottom border-1 border-light  navbar-dark shadow sticky-top'>
              <div className='container'>
        
                        <a  href='/' className='navbar-brand  fs-4 text-light'>
                            <span> A. B. Togueu Motcheyo</span>
                        </a>
                        <button className='btn navbar-toggler border-0'  data-bs-toggle='collapse' data-bs-target='#menu'>
                            <span className='navbar-toggler-icon'></span>
                        </button>                      
            
                       
            
                    <nav className='navbar-collapse collapse d-md-flex justify-content-md-end  ' id='menu'>
                      <ul className='navbar-nav '>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>research</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>publications</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>gallery</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>Courses</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>blog</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>Conferences</a></li>
                          <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link'>Contacts</a></li>
                      </ul>
                  </nav>  
                
                  
              </div>
              
          </header>
      </>
  )
}

export default Header