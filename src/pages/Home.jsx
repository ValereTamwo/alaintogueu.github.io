import React from 'react'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import dataJ from '../data/data.json'
import Publics from '../components/Publics'
import ConferenceTalks from '../components/Conf'
import Publications from '../components/publication'

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
      
      <Header />
      <main>
        <Welcome />
        <section id='publication' style={{paddingTop:'8vh'}}>
          <Publications/>
        </section>
        <section id='conference'   style={{paddingTop:'5vh'}}>
            <ConferenceTalks/>
        </section>
        <section id='Awards'></section>
      </main>
        <Footer />
        
    </>
  )
}

export default Home