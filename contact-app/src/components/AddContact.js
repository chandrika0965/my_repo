import React, { Component } from 'react'

export class AddContact extends Component {
    constructor(props){
     super(props)
     this.state = {
        name: '',
        email:'',
     }
    }
 onChangeName = (e)=>{
 this.setState({
    name: e.target.value
 })
 }

 onChangeEmail = (e)=>{
this.setState({
    email: e.target.value
})
 }

 submitContact = (e)=>{
    e.preventDefault();
    if(this.state.name === '' || this.state.email ===''){
     return 
    }
      this.props.passContact(this.state);
      this.setState({
        name: '',
        email:''
     })
     this.props.history.push('/')
 }

  render() {
    return (
      <div className='ui main' style ={{marginTop:'50px'}}>
        <h2>Add Contact</h2>
        <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' id='name' value={this.state.name} placeholder='Name' onChange = {this.onChangeName} />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' id='email' value={this.state.email} placeholder='Email' onChange = {this.onChangeEmail} />
                </div>
                <button className='ui button blue' type='Submit' onClick = {this.submitContact}>Submit</button>
        </form>
      </div>
    )
  }
}

export default AddContact
