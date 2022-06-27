import React, { useState } from 'react'

export default function TextForm() {

    let upclick = ()=>{

        console.log('you have clicked on up click');
        setText('my name is praveen  ');

    }
    let onChange = (event)=>{
        setText(event.target.value);

    }

    const [text , setText] = useState('This text value');
    // setText('This is Next text');
    return (
        //         <div className="mb-3">
        //             <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        //   <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        // </div>
        <div className="container my-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <h1>Address:</h1>
                        {/* <form action="">
                        </form> */}

                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter Your Text Here:</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChange} rows="3"></textarea>
                        <br />
                        <button className="btn btn-primary" onClick={upclick}>Conver to UpperCase</button>

                    </div>
                </div>
            </div>
        </div>

    )
}
