import React,{useState} from 'react'
import { useContextCrud } from '../context/ContactsCrudContext'
import {useNavigate} from 'react-router-dom'

export const AddContact = ()=> {
   const [name, setName ] = useState("");
   const [email, setEmail] = useState("");
   const {passContacts} = useContextCrud();
   const navigate = useNavigate()
  
 const onChangeName = (e)=>{
  setName(e.target.value)
 }

 const onChangeEmail = (e)=>{
  setEmail(e.target.value)
 }

 const submitContact = (e)=>{
    e.preventDefault();
    if(name === '' || email ===''){
      alert("Enter the fields")
     return 
    }
    passContacts({name, email});
    setName("");
    setEmail("")
    navigate("/")
 }

  
    return (
      <div className='ui main' style ={{marginTop:'50px'}}>
        <h2>Add Contact</h2>
        <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' 
                    id='name' value={name} 
                    placeholder='Name' 
                    onChange = {onChangeName} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' 
                    id='email' value={email} 
                    placeholder='Email' 
                    onChange = {onChangeEmail} />
                </div>
                <button className='ui button blue' 
                type='Submit' 
                onClick = {submitContact}>Submit</button>
        </form>
      </div>
    )
  
}

export default AddContact
