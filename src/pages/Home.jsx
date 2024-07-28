import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import dataJ from '../data/data.json'
import Publics from '../components/Publics'
import ConferenceTalks from '../components/Conf'
import Publications from '../components/publication'
import Sidebar from '../components/Sidebar'
import Awards from '../components/Awards'
import Visits from '../components/Visit'
import Colaborators from '../components/Colaborators'
import Conference from '../components/Conference'

export function data() {
  return{dataJ}
}

function Home() {

    const [data,setData] = useState([])
    
    useEffect(() => {
        // fetch_data()
        setData(dataJ)
        console.log(dataJ)
    },[])

  return (
    <>
      <div className="d-none d-md-block">
        <Sidebar />
      </div>
      
      {/* Header visible on small screens */}
      <div className="d-block d-md-none">
        <Header />
      </div>
      <main>
        <Welcome />
        <section id="publication">
          <Publications />
        </section>
        <section id="conference">
          <ConferenceTalks />
          {/* <Conference/> */}
        </section>
        <section id="Award">
          <Awards/>
        </section>
        <section id='visit'>
          <Visits/>
        </section>
      </main>
      <section id='colaborators'>
        <Colaborators/>
      </section>
      <div className='d-block d-md-none'>
        <Footer />
      </div>
    </>
  )
}

export default Home