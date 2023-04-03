import React from 'react';
import user from '../images/user.jpg'

const ContactDetails = ()=>{
return (
    <div className = 'main' style={{marginTop :'80px'}}>
        <div className='ui card centered'>
            <div className='image'>
            <img src={user} alt='user'/>
            </div>
            <div className='content'>
                <div className='header'>
                </div>
                <div className='description'>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ContactDetails