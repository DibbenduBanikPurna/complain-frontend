import React from 'react';
import { Link } from 'react-router-dom';

const Notifications = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <p>Email:{data.email}</p>
                    <p>Complain:{data.complain}</p>
                   <Link to={`/reply/${data._id}`}><button className={data.done? 'btn btn-primary':'btn btn-warning'}>{data.done? "Done" : "reply"}</button></Link> 
                </div>
            </div>
            
        </div>
    );
};

export default Notifications;