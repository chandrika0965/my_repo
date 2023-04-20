import React, { useState } from 'react';
import {useForm} from "react-hook-form"

function RegistrationForm() {
    const [userData, setUserData] = useState();
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit =(data)=>{
        setUserData(data);
    }

  return (
   
      <div className = "ui container" style={{ marginTop: '60px' }}>
        <pre>{JSON.stringify(userData, undefined, 2)}</pre>
        <form onSubmit = {handleSubmit(onSubmit)}>
        <h1> Form Registration</h1>
      <div className = "ui divider"></div>
      <div className = "ui form">
      <div className = "field">
      <label>Username</label>
      <input type="text" 
      name ="username"
      {...register("username", {
        required: "Required UserName",
      })}
      placeholder="Enter Username"
      ></input>
    
      </div>
      <p>{errors.username?.message}</p>
      
      <div className = "field">
      <label>Email</label>
      <input type="text"
      name="email"
       {...register("email", {
        required: "Required Email",
        pattern: {value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, messsage:"Enter valid email"}
      })}
      placeholder='Enter Email'
      ></input>
      </div>
      <p>{errors.email?.message}</p>
      <div className = "field">
      <label>Password</label>
      <input type="text" 
      name="password"
      {...register("password", {
        required: "Required Password",
        minLength: {value:4, message:"Password must be more than 4 characters"},
        maxLength: {value:10, message:"Password cannot be more than 10 characters"}
      })}
      placeholder="Enter Password" 
   
      ></input>
      </div>
      <p>{errors.password?.message}</p>
      <button className='ui button blue'
      type="Submit"
      >Submit</button>
      </div>
        </form>
     
      </div>
   
  )
}

export default RegistrationForm
