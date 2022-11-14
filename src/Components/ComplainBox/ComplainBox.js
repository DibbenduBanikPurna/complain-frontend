import React, { useState } from 'react';
import './Complain.css'
import useFirebase from '../../Hooks/UseFirebase';

const ComplainBox = () => {
    const [complain,setComplain]=useState('')
    const {users}=useFirebase()

    const handleChange=(e)=>{
        setComplain(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(complain)
        fetch('http://localhost:5000/complain',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({complain, email:users.email, done:''} )
        })
        .then(res=>res.json())
        .then(data=>{
            alert(data)
        })
        
    }
    return (
        <div className='complain'>
        <div className='container'>
        <h2 className='bg-light text-center '>WELCOME TO MBSTU</h2>
                <p></p>
            <div className='col-md-4 m-auto mt-5 '>
               
            <form  onSubmit={handleSubmit}>
                <h4 className='text-light'>Please Put your Complain</h4>
            <textarea rows="12" cols="40" name='compalins'  onChange={handleChange}></textarea>
            <br/>
                <button className='btn btn-lg btn-success' style={{marginLeft:'100px'}} type="submit">Submit</button>
            </form>
           

            </div>
            
        </div>
        </div>
    );
};

export default ComplainBox;