import React, { useEffect, useState } from 'react';
import Notifications from './Notifications';

const Notification = () => {
    const [complain,setComplain]=useState([])
    const [search,setSearch]=useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/complain')
        .then(res=>res.json())
        .then(data=>{
            setComplain(data);
            console.log(data)
        })
    },[])

    
    return (
        <div className='container'>
            <h2 className='text-center'>All Complains</h2>
            <div className='row bg-light vh-100'>
            <form className='mb-5 '  >
            <input className='bg-light' style={{float:'right'}} type="search" onChange={(e)=>setSearch(e.target.value)} name="search" placeholder='Enter Search'/>
            </form>
                {
                    complain?.filter((val)=>{
                        if(search==="")
                        {
                            return val
                        }
                        else if(val?.category?.toLowerCase().includes(search.toLowerCase()))
                        {
                            return val
                        }
                    })
                    .map((data)=>{
                        return <Notifications data={data} />
                    })
                    // complain.map((data)=>{
                    //     return <Notifications  key={data._id} data={data}/>
                    // })
                }
            </div>
            
        </div>
    );
};

export default Notification;