import { useState, useEffect } from 'react';

import './app.css'


const App = () => {
  const [hoverBackgroundClass, setHoverBackgroundClass] = useState("")


  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const cursorPositionX = e.clientX;
      const cursorPositionY = e.clientY;

      setHoverBackgroundClass(`radial-gradient(600px at ${cursorPositionX}px ${cursorPositionY}px, rgba(29, 78, 216, 0.15), transparent 80%)`)

    })
  }, [])


  return <div className='bg-slate-900 w- w-screen h-screen'>
    <div className={`w-full max-w-[1250px] h-full mx-auto`} style={{ background: hoverBackgroundClass }}></div>
  </div>
}

export default App;


// main div that will give the background
// div with the hover effect
// div that will contain the left and right container
// left and right container
// background: radial - gradient(600px at 1168px 227px, rgba(29, 78, 216, 0.15), transparent 80 %);