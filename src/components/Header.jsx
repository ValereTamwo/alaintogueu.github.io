import React from 'react';

function Header() {
  return (
    <>
      <header style={{ backgroundColor: 'rgba(43, 43, 43, 0.8)' }} className='container-fluid navbar navbar-expand-lg p-2 border-bottom border-1 border-light shadow sticky-top'>
        <div className='container'>
          <a href='/' className='navbar-brand fs-4 text-light'>
            <span> A. B. Togueu Motcheyo</span>
          </a>
          <button className='btn navbar-toggler border-0' data-bs-toggle='collapse' data-bs-target='#menu'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <nav className='navbar-collapse collapse d-md-flex justify-content-md-end' id='menu'>
            <ul className='navbar-nav'>
              <li className='nav-item d-flex justify-content-center'><a href='#' className='nav-link text-light'>home</a></li>
              <li className='nav-item d-flex justify-content-center'><a href='#degree' className='nav-link text-light'>Academic Degrees</a></li>

              <li className='nav-item d-flex justify-content-center'><a href='#career' className='nav-link text-light'>Career</a></li>

              <li className='nav-item d-flex justify-content-center'><a href='#publication' className='nav-link text-light'>publications</a></li>
              <li className='nav-item d-flex justify-content-center'><a href='#conference' className='nav-link text-light'>conferences</a></li>
              {/* <li className='nav-item d-flex justify-content-center'><a href='#galery' className='nav-link text-light'>gallery</a></li> */}
              {/* <li className='nav-item d-flex justify-content-center'><a href='/' className='nav-link text-light'>courses</a></li> */}
              
              <li className='nav-item d-flex justify-content-center'><a href='#' className='nav-link text-light'>Awards</a></li>
              <li className='nav-item d-flex justify-content-center'><a href='#visit' className='nav-link text-light'>Visits</a></li>
              <li className='nav-item d-flex justify-content-center'><a href='#collaborators' className='nav-link text-light'>Colaborators Abroad</a></li>

              <li className='nav-item d-flex justify-content-center'><a href='#' className='nav-link  text-light'><u>Update: 27-Jul-2024</u></a></li>

            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
