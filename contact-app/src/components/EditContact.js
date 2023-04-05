import React, {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { useContextCrud } from '../context/ContactsCrudContext';

export const EditContact=()=>{
  const location = useLocation()
  const {id, name, email} = location.state.contact
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const {updateContact} = useContextCrud();
  const navigate = useNavigate()
    
 const onChangeName = (e)=>{
  setNewName(e.target.value)
 }

 const onChangeEmail = (e)=>{
 setNewEmail(e.target.value)
 }

const editContact = (e)=>{
    e.preventDefault();
    if(newName === '' || newEmail ===''){
     return 
    }
    updateContact({id, name:newName, email:newEmail})
      setNewName("")
      setNewEmail("")
      navigate('/')
 }


    return (
      <div className='ui main' style ={{marginTop:'50px'}}>
        <h2>Edit Contact</h2>
        <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' 
                    id='name' value={newName} 
                    placeholder='Name' 
                    onChange = {onChangeName} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' 
                    id='email' value={newEmail} 
                    placeholder='Email' 
                    onChange = {onChangeEmail} />
                </div>
                <button className='ui button blue' 
                type='Submit' 
                onClick = {editContact}>Edit</button>
        </form>
      </div>
    )
    }


export default EditContact
