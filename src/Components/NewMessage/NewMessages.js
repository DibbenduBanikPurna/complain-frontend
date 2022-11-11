import React from 'react';

const NewMessages = ({data}) => {
    console.log(data)
    return (
        
        
        <div className='col-md-3 mt-5'>
            <div className='card'>
                <div className='card-body bg-dark'>
                    <h5 className='text-light'>complained:{data?.complain}</h5>
                    <p className='text-light'>Reply:{data?.reply}</p>
                </div>
            </div>
            
        </div>
         
        
    );
};

export default NewMessages;