import React, { useState } from 'react';
import './Complain.css'
import useFirebase from '../../Hooks/UseFirebase';

const ComplainBox = () => {
    const [complain,setComplain]=useState({})
    //const [category,setCategory]=useState('')
    const {users}=useFirebase()

    console.log(complain.complain)
    const handleChange=(e)=>{
        //setComplain(e.target.value)
      //  setCategory(e.target.value)
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...complain };
       // const {users}=useFirebase()
        newData[field] = value
        setComplain(newData)
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(complain)
        fetch('http://localhost:5000/complain',{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({complain:complain.complain, email:users.email, done:'',category:complain.category} )
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
                <input type="text" name="category" onChange={handleChange} placeholder='Enter Category'/>
            <textarea rows="12"  cols="40" name='complain'  onChange={handleChange}></textarea>
            <br/>
                <button className='btn btn-lg btn-success' style={{marginLeft:'100px'}} type="submit">Submit</button>
            </form>
           

            </div>
            
        </div>
        </div>
    );
};

export default ComplainBox;