import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success")
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let ssText= text.toLowerCase();
        setText(ssText);
        props.showAlert("Converted to LowerCase","success")
    }
    const handleclClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let ssText=('')
        setText(ssText);
        props.showAlert("Clear the text","success")
    }

    // const handleTClick = ()=>{
    //     // console.log("Uppercase was clicked"+text);
    //     let ssText= text.slice();
    //     setText(ssText);
    // }

    const handleOnchange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
        // if(text.length >1000){
        //   setText("you croos your limit ok")
        //   setText("")
        // }
        
    }

    const handleCopy= ()=>{
        // console.log("i am copy")
       var text=document.getElementById("Mybox");
       text.select();
       navigator.clipboard.writeText(text.value);
       props.showAlert("You copied the text","success")
        
    }
    const handleExtraSpaces= ()=>{
       let newText=text.split(/[ ]+/);
       setText(newText.join(" "))
       props.showAlert("Extra spaces are removed","success")
    }
    

    const [text, setText] = useState("");
    // text = "new text" // this is wrong way to change the teaxt
    // setText("this is new text") //correct way to change the text
  return (
    <>
    <div className="container">
    <h1 className={` text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="container" value={text} onChange={handleOnchange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}}  id="Mybox" rows="7"></textarea>
  </div>
  <div className='flex flex-wrap'>
  <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-1' onClick={handleclClick}>Clear Text</button>
  <button className='btn btn-primary mx-1 my-2 ' onClick={handleCopy}>Copy Text</button>
  <button className='btn btn-primary mx-1 my-2 ' onClick={handleExtraSpaces}>remove Extra spaces</button>
  {/* <button className='btn btn-primary mx-1 my-2' onClick={handleTClick}>any functon you want</button> */}
  </div>
  </div>

  <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h2>your text summry</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split('').length } Minutes read</p>
    <h2>preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

  </div>
 
  </>

  )
}
