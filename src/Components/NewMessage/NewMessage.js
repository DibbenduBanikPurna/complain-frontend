import React, { useEffect, useState } from 'react';
import useFirebase from '../../Hooks/UseFirebase';
import NewMessages from './NewMessages';

const NewMessage = () => {
    const [newNot,setNew]=useState([])
    const [com,setCom]=useState([])
    const {users}=useFirebase()
    useEffect(()=>{
        fetch(`http://localhost:5000/complains/${users?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setCom(data)
           // console.log(data)
        })
    },[users?.email])
    useEffect(()=>{
        fetch(`http://localhost:5000/reply/${users?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setNew(data);
            //console.log(data)
        })
    },[users.email])
    return (
        <div className='container'>
            <div className='row'>
                 {
                    newNot.map((data)=>{
                        return <NewMessages key={data._id} data={data}/>

                    })

                    
                    
                       
                    
                } 
              
            </div>

            
        </div>
    );
};

export default NewMessage;