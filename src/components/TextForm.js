import React, { useState } from 'react'


export default function TextForm(props) {
  const[text,settext] = useState('Enter text here');
    const handleupclick = ()=>{
        // console.log("uppercase button is clicked")
        let newtext = text.toUpperCase()
        settext(newtext)
        // if(text===""){

        //   props.alerts("Write text in textbox")
        // }
        // else{
        // props.alerts("Converted to upper case")
        // }
        text===""?props.alerts("Write text in textbox"):props.alerts("Converted to upper case");
      }
      const handleupclick1 = ()=>{
        // console.log("uppercase button is clicked")
        
        text === ""?props.alerts("Write text in textbox"):props.alerts("Converted to lower case")
        let newtext = text.toLowerCase()

        settext(newtext)
        
      }
      const handleupclick2 = ()=>{
        // console.log("uppercase button is clicked")
        text===""?props.alerts("Write text in textbox"):props.alerts("Converted to sentence");
        if(text !== ''){
          let newtext = text[0].toLocaleUpperCase() 
          for (let index = 1; index < text.length; index++) {
            newtext = newtext + text[index].toLowerCase()
            
          }
          settext(newtext)
        }
        
      }
      const handleupclick3 = ()=>{
        // console.log("uppercase button is clicked")
        let newtext =''
        settext(newtext)
        text===""?props.alerts("Write text in textbox"):props.alerts("text is deleted");
        
      }
      const handleupclick4 = ()=>{
        // console.log("uppercase button is clicked")
        // let newstext ="";
        // console.log(text.length)
        // for (let index = text.length-1; index >= 0; index--) {
        //   newstext  +=   text[index]
        // }
        let newtext = text.split(" ").reverse().join(" ")
        text===""?props.alerts("Write text in textbox"):props.alerts("text is reversed");
        settext(newtext)
        
      }
      const handleonchange = (event) =>{
        // console.log("on change")
        settext(event.target.value)
      }
    const handlecopy  = ()=>{
      let texta = document.getElementById('text')
      texta.select();
      // texta.se
      // navigator.clipboard.writeText(texta.value)
      console.log(texta.value)
      text===""?props.alerts("Write text in textbox"):props.alerts("text is copied");
    }
    const removetextspaces = ()=>{
      let newtext = text.split(/[ ]+/) // regx is ueed === means watch regs video
      settext(newtext.join(" "))
      text===""?props.alerts("Write text in textbox"):props.alerts("remove extra spaces from text");
    }

    // text="new text" // wrong way to change the state
    // settext('New text') // correct way to change the state
    
  return (
    <div id="cont-form"style={{color:props.strta ==='dark'?'white':'black'}}>
      <div id="textbox">
        <label htmlFor='text' className='form-label'>{props.heading}</label>
        <textarea style ={{backgroundColor: props.strta==='dark'?'#042743':'white',color:props.strta ==='dark'?'white':'black'}}  rows={8} id="text" value={text} onChange={handleonchange} className='formcontrol'></textarea>
      </div>
      <div id="text-form-btn" style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handleupclick}>Convert to upprcase</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handleupclick1}>Convert to lowerCase</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handleupclick2}>Convert to Sentence</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handleupclick3}>Clear text</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handleupclick4}>Reverse text</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={handlecopy}>Copy text</button>
        <button disabled={text.split(/\s+/).filter((element) =>{return element.length !== 0}).length === 0} className='btnss' onClick={removetextspaces}>Remove extra spaces</button>
      </div>
      <div className="container my-3">
        <h2 className='form-label'>Your text summary</h2>
        {/* <p>{text.split(" ").length === 1?text.split(" ").length - 1:text.split(" ").length} Words {text.length} Characters</p> */}
        <p>{text.split(/\s+/).filter((element) =>{return element.length !== 0}).length} Words {text.length} Characters</p>
        <p>Average time needed to read  {text.split(" ").filter((element) =>{return element.length !== 0}).length*0.008} Minutes </p>
        <h3 className='form-label'>Preview</h3>
        <p>{text.length>0?text:"Enter the text in textarea to preview here"}</p>
        {/* <p>{text=== null?"Enter the text in textarea to preview here":text}</p> */}
      </div>     
    </div>
  )
}