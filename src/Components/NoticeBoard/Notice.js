import React from 'react';
import useFirebase from '../../Hooks/UseFirebase';

const Notice = ({data,handleDelete}) => {
    const {users}=useFirebase()

    return (
        <div className='col-md-4 mt-2'>
            <div className='card'>
                <div className='card-body'>
                    <p>{data.notice}</p>
                    <span>{data.time}</span>
                    <span className='m-4'>{data.tarikh}</span>
    {users.email==="rooman@gmail.com" &&                <button onClick={()=>handleDelete(data._id)} className='btn btn-danger'>delete</button>}
                </div>
            </div>
            
        </div>
    );
};

export default Notice;