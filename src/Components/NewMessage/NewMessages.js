import React from 'react';

const NewMessages = ({data}) => {
    console.log(data)
    return (
        
        
        <div className='col-md-3 mt-5'>
            <div className='card'>
                <div className='card-body '>
                    <p className='text-dark'>Complained:{data?.complain}</p>
                    <p className='text-dark'>Reply:{data?.reply}</p>
                </div>
            </div>
            
        </div>
         
        
    );
};

export default NewMessages;