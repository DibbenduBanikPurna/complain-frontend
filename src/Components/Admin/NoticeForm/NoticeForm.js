import React, { useState } from 'react';

const NoticeForm = () => {
    const [noticeData,setNoticeData]=useState({})
    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...noticeData, };
        newData[field] = value
        setNoticeData(newData)
    }
    const date=new Date().toLocaleTimeString()
    const tarikh=new Date().toLocaleDateString()
    console.log(tarikh)
    const handleSubmit=e=>{
        e.preventDefault();
        fetch('http://localhost:5000/notice',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {name:noticeData.name, notice:noticeData.notice, time:date, tarikh:tarikh })

        })
        alert("Notice posted successfully")

    }
    return (
        <div className='bg-light vh-100'>
            <div className='row'>
                <div className='col-md-4 m-auto mt-5'>
                    <div className='card'>
                        <div className='card-body'>
                        <form onSubmit={handleSubmit}>
            <input className='form-control' onBlur={handleBlur} name="name" type="text" placeholder="Enter Your Name"/>
            <br/>
            <textarea className='form-control' onBlur={handleBlur} name="notice" placeholder="Enter notice"/>
            <br/>
            <input className='btn btn-primary' type="submit" value="submit"/>
            </form>
                        </div>
                    </div>
              
                </div>
            </div>
           
          
        </div>
    );
};

export default NoticeForm;



{/* <a href="https://ibb.co/FgCn5VY"><img src="" alt="p1" border="0"></a> */}