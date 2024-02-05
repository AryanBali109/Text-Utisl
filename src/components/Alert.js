import React from 'react'

function Alert(props) {
    // let rasta = ()=>{
    //     let rada = document.getElementById('park')
    //     rada.style.display="none";
    // }
  return (

    // your shift layout is not good for website
    // for using javascript after the div tag use curly braces
    <div style={{height:'60px'}}>
      {
    props.alert &&<div >

        <div className='alerts' id="park">
            <p className='ripeee'>{props.alert.msg}</p>
            {/* <button className="das" id="rada"onClick={rasta}>☀️</button> */}
        </div>
    </div>
}
    </div>
  )
}

export default Alert;