import React, { useState } from 'react'

export default function TextForm() {

    let upclick = () => {

        // console.log('you have clicked on up click');
        let nextText = text.toUpperCase();
        setText(nextText);

    }
    let lwclick = () =>{
       let lowercase = text.toLocaleLowerCase();
       setText(lowercase);
    } 
    let claerText = () =>{
        let clear = "";
        setText(clear);
    } 
    let onChange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState('This text value');
    // setText('This is Next text');
    return (
        //         <div className="mb-3">
        //             <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        //   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        // </div>
        <div className="container my-3">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <div className="mb-3">
                        <h1></h1>
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Here:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChange} rows="3"></textarea>
                        {/* {console.log(text.split(" "))} */}
                        <label htmlFor="" className='fw-bold'>Words: {text.split(" ").length - 1} </label> &nbsp;
                        <label htmlFor="" className='fw-bold'> Charector: {text.length}</label>
                        <br />
                        <button className="btn btn-primary " onClick={upclick}>Convert to UpperCase</button>
                        <button className="btn btn-primary mx-2" onClick={lwclick}>Convert to LowerCase</button>
                        <button className="btn btn-primary" onClick={claerText}>Clear</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
