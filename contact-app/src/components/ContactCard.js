import React from 'react';
import {Link} from 'react-router-dom'
import { useContextCrud } from '../context/ContactsCrudContext';
const ContactCard = (props)=>{
    const {id, name, email}= props.contact
    const {removeContact} = useContextCrud()

    const deleteContact = (id)=>{
        removeContact(id)
    }
return (<div className ='item'>
    <div className='content'>
        <Link to= {`/contact/${id}`}
         state = {{contact: props.contact}}>
            <div className='header' style={{ marginTop: '10px' }}>
                {name}
            </div>
            <div>
                {email}
            </div>
        </Link>
        <i className='trash alternate outline icon' 
        style={{ color: 'red', float: 'right', marginBottom: '10px', marginLeft: "25px" }} 
        onClick={() => { deleteContact(id) }}></i>
        <Link to={'/edit'}
         state = {{contact: props.contact }}>
            <i className='edit alternate outline icon' 
            style={{ color: 'blue', float: 'right', marginBottom: '10px' }}></i>
        </Link>
    </div>
</div>)
}

export default ContactCard;