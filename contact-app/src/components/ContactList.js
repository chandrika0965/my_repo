import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import ContactCard from './ContactCard';
import {useContextCrud} from '../context/ContactsCrudContext'

const ContactList = (props)=>{
  const {contacts, retriveContacts, searchKeyHandler, searchTerm , searchResult} = useContextCrud()
    
  const renderList = (searchTerm.length < 1 ? contacts : searchResult).map((contact)=>{
   return (
   <ContactCard contact = {contact} 
    key={contact.id}/>
    )
   });
   useEffect(()=>{
    retriveContacts();
   }, [])
 const changeHandler = (e)=>{
   searchKeyHandler(e.target.value)
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
   value={searchTerm} 
   onChange={changeHandler} />
   <i className="search icon"></i>
      </div>
    </div>
   </div>
    {renderList.length > 0 ? renderList : <h2 style={{color:'red'}}>No Contacts</h2>}
 </div>)
}

export default ContactList;