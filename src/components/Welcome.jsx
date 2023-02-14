import React from 'react'
import { Chrono } from 'react-chrono'
import profile from '../images/profil.jpg'
import go from '../images/go.svg'

function Welcome() {

    const style = [
        {
            'background-color':''
        }
    ]
const data = [
  {
    title: "May 2008",
    cardTitle: "University of Yaounde 1, Faculty of Physics, Department of Physics",
    timelineContent	:
      "fondamental Physics",
    contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.
      To save the BEF, an evacuation by sea was organised under the direction of Admiral Bertram Ramsay. Over nine days, warships of the Royal and French navies together with civilian craft, including the “little ships” made famous in a BBC broadcast by JB Priestley, successfully evacuated more than 338,000 British and Allied troops from the beaches of Dunkirk, in the remarkable Operation Dynamo. Churchill called it a “miracle of deliverance”, but warned, “Wars are not won by evacuations.”`
  },
  {
    title: "March 2009 - December 2014",
    cardTitle: "Department of Physics, Faculty of science,University of Yaounde 1",
    timelineContent	: `Nonlinear Physics
`,
    contentDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
      The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
  }
  
];
    
    const data2 = [
     {
    title: "2022 -  Present",
    cardTitle: "University of Yaounde I, Higher Technical Teacher's Training College Ebolowa",
    timelineContent	: `Lecturer`,
    contentDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
      The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
  },
  {
    title: "December 2014 - 2021",
    cardTitle: "University of Yaounde I, Higher Technical Teacher's Training College Ebolowa",
    timelineContent	:
      "Assistant Lecturer",
    contentDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.
      To save the BEF, an evacuation by sea was organised under the direction of Admiral Bertram Ramsay. Over nine days, warships of the Royal and French navies together with civilian craft, including the “little ships” made famous in a BBC broadcast by JB Priestley, successfully evacuated more than 338,000 British and Allied troops from the beaches of Dunkirk, in the remarkable Operation Dynamo. Churchill called it a “miracle of deliverance”, but warned, “Wars are not won by evacuations.”`
  },
  {
    title: "March 2009 - December 2014",
    cardTitle: "GBHS Kumba ",
    timelineContent	: `Teacher`,
    contentDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
      The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
  }
  
];
  return (
      <>
          <div className='container mt-4'>
              <div className='row d-flex flex-column-reverse flex-md-row'>
                  <div className='col-12 col-md-6  pt-md-5 text-center p-3  border-md-end border-md-1 d-md-flex flex-md-column    border-md-secondary' >
                      <p className='fw-bold   fs-4 justify-content-center d-flex'>
                          Alain Bertrand TOGUEU MOTCHEYO
                      </p>
                      <p>
                          I am an Assistant Professor of Aerospace Engineering at the Indian Institute of Science (IISc). My research lies at the intersection of physics and engineering, where I am broadly interested in understanding and controlling the propagation of mechanical energy in engineered materials such as metamaterials. Please find my full CV
                      </p>
                  </div>
                  <div className='col-12 col-md-6 bg- p-3   align-items-center d-flex'>
                      <img className='   position-relative top-2 ms-5 justify-content-center ' alt='' src={profile} />
                  </div>
              </div>
          </div>
          <div className='container mt-4'>
                <span style={style[0]} className='p-3  text-white   w-25 mt-3  border-start fs-5 border-2 border-light'><span className=''>Educational History</span></span>
          </div>
          <div className='container  justify-content-center'>
              <div className='row d-flex justify-content-md-center'>
                  <div className='col-12 col-md-6 bg-  p-3 ' >
                       <div style={{ width: "100%", height: "100%" }}>
                         <Chrono items={data} mode='VERTICAL' />
                        </div>
                 </div>
              </div>
          </div>

          <div className='container mt-4'>
                <span style={style[0]} className='p-3  text-white   w-25 mt-3  border-start fs-5 border-2 border-light'><span className=''>Professionnal History</span></span>
          </div>
          <div className='container  justify-content-center'>
              <div className='row d-flex justify-content-md-center'>
                  <div className='col-12 col-md-6 bg-  p-3 ' >
                       <div style={{ width: "100%", height: "100%" }}>
                         <Chrono items={data2} mode='VERTICAL' />
                        </div>
                 </div>
              </div>
          </div>


          <div className='container mt-4'>
                <span style={style[0]} className='p-3  text-white   w-25 mt-3  border-start fs-5 border-2 border-light'><span className=''>Reach Me </span></span>
          </div>

          <div className='container mt-4 mb-3'>
              <div className='row ms-5'>
                  <div className='col-2 col-md-1'>
                      <a href=''>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                      </a>
                  </div>
                  <div className='col-2 col-md-1'>
                      <a href=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                        </svg>
                      </a>
                  </div>
                  <div className='col-2 col-md-1'>
                      <a href=''>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-google" viewBox="0 0 16 16">
                             <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                        </svg>
                      </a>
                  </div>
                  <div className='col-2 col-md-1 '>
                      <a href=''>
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                      </a>
                  </div>
                  
              </div>
          </div>
          {/* <Chrono itemWidth={items} mode='HORIZONTAL'/> */}
          
      </>
  )
}
export default Welcome