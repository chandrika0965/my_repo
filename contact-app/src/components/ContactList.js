import React from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard';

const ContactList = (props)=>{
   const deleteItem = (id)=>{
    props.removeContact(id)
   }  
  const renderList = props.contacts.map((contact)=>{
   return (
   <ContactCard contact = {contact} 
    removeItem ={deleteItem} 
    key={contact.id}/>
    )
   });

 const changeHandler = (e)=>{
   props.searchKey(e.target.value)
 }
 return(<div className='ui celled list' style={{marginTop : '65px'}}>
   <div>
   <h2>Contact List</h2>
    <Link to = '/add'>
       <button className='ui button blue right'>
          ADD Contact</button>
    </Link>
    <div className="ui search">
      <div className="ui input icon">
   <input type="text" placeholder='search contact' 
   value={props.searchTerm} 
   onChange={changeHandler} />
   <i className="search icon"></i>
      </div>
    </div>
   </div>
    {renderList.length > 0 ? renderList : <h2 style={{color:'red'}}>No Contacts</h2>}
 </div>)
}

export default ContactList;