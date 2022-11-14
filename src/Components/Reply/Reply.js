import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import useFirebase from '../../Hooks/UseFirebase';
import './Reply.css'
const Reply = () => {
    const [com,setCom]=useState({})
    //const {users}=useFirebase()
    const [reply,setReply]=useState('')
    const {id}=useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/complain/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setCom(data)
            console.log(data)
        })
    },[id])

    const  handleChange=(e)=>{
        setReply(e.target.value)
    }
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        fetch('http://localhost:5000/reply',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({reply, email:com.email,complain:com.complain })

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })

       fetch('http://localhost:5000/com',{
        method:"PUT",
        headers: {
            //'authorization': `Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({email:com.email})
       })
      

        alert("Complain replied successfully")
    }

   
    return (
        <div  className='row  bg-secondary vh-100'>
            <div className='col-md-3 m-auto'>
                <div className='card'>
                    <div className='card-body'>
                        <p>complain:{com.complain}</p>
                        <p>email:{com.email}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-6 m-auto'>
                <form onSubmit={handleSubmit}>
                <textarea rows="10" cols="40" name="repli" onChange={handleChange}></textarea>
                <br/>
                <button  type='submit' className='btn btn-primary'>Submit</button>
                </form>
                
            </div>
        
        </div>
    );
};

export default Reply;