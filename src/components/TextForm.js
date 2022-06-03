import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert('Text transformed to upper case', 'success')
    }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    const handleClearText = () => {
        setText('');
        props.showAlert('Text Cleared', 'success')
    }
    const handleLowerClick = () => {
        setText(text.toLowerCase())
        props.showAlert('Text transformed to lower case', 'success')
    }

    const handleRemoveSpace = () =>{
        setText(text.replace(/\s+/g, ' ').trim());
        props.showAlert('Extra Spaces removed', 'success')
    }

    

    return (
        <>
            <div className='container' style={{ 'color': props.mode === 'light' ? 'black' : 'white' }}>
                <h1 style={{ 'color': props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnchange}></textarea>
                </div>
                <button className='btn btn-sm btn-primary' onClick={handleUpClick}>Convert to Upper</button>
                &nbsp;&nbsp;
                <button className='btn btn-sm btn-primary' onClick={handleLowerClick}>Convert to Lower</button>
                &nbsp;&nbsp;
                <button className='btn btn-sm btn-primary' onClick={handleRemoveSpace}>Remove Space</button>
                &nbsp;&nbsp;
                <button className='btn btn-sm btn-primary' onClick={handleClearText}>Clear Text</button>

               
            </div>
            <div className="container" style={{ 'color': props.mode === 'light' ? 'black' : 'white' }}>
                <h4>Text SUmmary </h4>
                <p>count to character {text.trim().length}</p> 
                <p>word count {text.trim() ? text.trim().split(' ').length : 0}</p> 
                <h4>Text Preview </h4>
                <p>{text.length ? text : 'no text to preview'}</p>
            </div>
        </>

    )
}
