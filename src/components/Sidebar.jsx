import React, { useState } from 'react';
import '../components/css/Sidebar.css'; 

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <button className='sidebar-toggle' onClick={toggleSidebar}>
        <span className='navbar-toggler-icon'></span>
      </button>

     <aside style={{ backgroundColor: 'rgba(43, 43, 43, 0.8)', height: '100vh', position: 'fixed', top: 0, left: 0, width: '250px', zIndex: 1000 }} className={`d-flex flex-column p-3 border-end border-1 border-light shadow`}>
        <a href='/' className='fs-4 text-light mb-4'>
          <span> A. B. Togueu Motcheyo</span>
        </a>
        <nav className='d-flex flex-column'>
          <a href='#' className='nav-link text-light mb-2'>Home</a>
          <a href='#degree' className='nav-link text-light mb-2'>Academic Degrees</a>
          <a href='#career' className='nav-link text-light mb-2'>Career</a>
          <a href='#publication' className='nav-link text-light mb-2'>Publications</a>
          <a href='#conference' className='nav-link text-light mb-2'>Conferences</a>
          {/* <a href='#galery' className='nav-link text-light mb-2'>Gallery</a> */}
          {/* <a href='/' className='nav-link text-light mb-2'>Courses</a> */}
          <a href='#Award' className='nav-link text-light mb-2'>Awards</a>
            <a href='#visit' className='nav-link text-light mb-2'>Visits</a>
            <a href='#colaborators' className='nav-link text-light mb-2'>Colaborators Abroad</a>
          <a href='#' className='nav-link text-light mb-2 '><u>Update: 27-Jul-2024</u></a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
