import React, { useEffect, useState } from 'react';
import Notice from './Notice';

const Notices = () => {
    const [noticeData,setNoticeData]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/notice')
        .then(res=>res.json())
        .then(data=>{
            setNoticeData(data)
        })
    },[])
    const handleDelete=(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/notice/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remainData=noticeData.filter((pd=>pd._id!==id))
            setNoticeData(remainData);
        })

    }
    
    return (
        <div className='bg-light vh-100'>
        <div className='container'>
            <div className='row'>
            {
                noticeData.map((data)=>{
                    return <Notice key={data._id} handleDelete={handleDelete} data={data}/>
                })
            }
            </div>
            
        </div>
        </div>
    );
};

export default Notices;