import { useState, useEffect } from 'react';

import './app.css'
import LeftSection from './sections/LeftSection';
import RightSection from './sections/RightSection';
import Container from './components/Container';


const App = () => {
  const [hoverBackgroundClass, setHoverBackgroundClass] = useState("")


  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursorPositionX = e.clientX;
      const cursorPositionY = e.clientY+window.pageYOffset;
      setHoverBackgroundClass(`radial-gradient(600px at ${cursorPositionX}px ${cursorPositionY}px, rgba(29, 78, 216, 0.15), transparent 80%)`)

    })
  }, [])


  return (
    <div className='bg-slate-900 w-full h-full min-w-[100vh] min-h-[100vh]'>
      <div className={`w-full h-full mx-auto`} style={{ background: hoverBackgroundClass }}>
        <div className='max-w-[1500px] mx-auto w-full h-full px-[6%] md:px-[8%] lg:px-[10%] xl:px-[13%]'>
          <div className='h-full w-full'>
            <div className='h-full w-full flex flex-col lg:flex-row'>
              <LeftSection />
              <RightSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;


// main div that will give the background
// div with the hover effect
// div that will contain the left and right container
// left and right container
// background: radial - gradient(600px at 1168px 227px, rgba(29, 78, 216, 0.15), transparent 80 %);