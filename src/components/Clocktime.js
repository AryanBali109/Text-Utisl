import React, { useState } from 'react'

export default function Clocktime() {
    
    // state
    const[time,setTime] = useState(new Date().toLocaleTimeString());

    setInterval(() => {
        // console.log("time-updated")
        setTime(new Date().toLocaleTimeString())
    }, 1000);
    
  return (
    <div>
      <div id="times">
        {time}
      </div>
    </div>
  )
}