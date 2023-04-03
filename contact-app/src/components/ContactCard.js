import React from 'react';
import {Link} from 'react-router-dom'
const ContactCard = (props)=>{
    const {id, name, email}= props.contact


return (<div className ='item'>
    <div className='content'>
        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
            <div className='header' style={{ marginTop: '10px' }}>
                {name}
            </div>
            <div>
                {email}
            </div>
        </Link>
        <i className='trash alternate outline icon' 
        style={{ color: 'red', float: 'right', marginBottom: '10px', marginLeft: "25px" }} 
        onClick={() => { props.removeItem(id) }}></i>
        <Link to={{ pathname: '/edit', state: { contact: props.contact } }}>
            <i className='edit alternate outline icon' 
            style={{ color: 'blue', float: 'right', marginBottom: '10px' }}></i>
        </Link>
    </div>
</div>)
}

export default ContactCard;