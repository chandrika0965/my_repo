import React , {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import api from '../api/contacts';
import EditContact from './EditContact';

function App() {
  const [contacts, setContact] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setsearchResult] = useState([])
  const passContacts = async (cont)=>{
    const request = {
      id: Math.floor(Math.random() * 100),
      ...cont
    }
    const response = await api.post("/contacts" , request);
  setContact([...contacts, response.data])
  }

  const updateContact = async (contact)=>{
   const response = await api.put(`/contacts/${contact.id}`, contact)
   const {id} = response.data;
   setContact(contacts.map((contact) =>{
    return contact.id === id ? {...response.data} : contact
   }))
  }
  const searchKeyHandler = (term)=>{
    setSearchTerm(term)
    if(term !== ''){
      const newSearchContact = contacts.filter((item)=>{
        return Object.values(item).join(" ").toLowerCase().includes(term.toLowerCase())
      })
      setsearchResult(newSearchContact)
    } else{
      setsearchResult(contacts)
    }
  }
 const retriveContacts =async ()=>{
  const response = await api.get("/contacts");
  return response.data
 }
  useEffect(()=>{
    const getAllContacts = async () => {
      const allContacts = await retriveContacts()
      if (allContacts) {
        setContact(allContacts);
    }
    }
    getAllContacts()
    }
  ,[])

  const removeContact= async (id)=>{
    await api.delete(`/contacts/${id}`)
    const newContact = contacts.filter(item =>{
      return item.id !== id
    })
   
    setContact(newContact)
   }

  return (
    <div className="ui container">
     
      <Router>
      <Header />
      
        <Switch >
          <Route path='/' exact render={(props)=>(<ContactList {...props} 
          contacts = {searchTerm.length < 1 ? contacts : searchResult} 
          removeContact = {removeContact} 
          searchTerm = {searchTerm} 
          searchKey = {searchKeyHandler}/>)}/>
          <Route path='/add' render={(props)=>(<AddContact {...props} passContact = {passContacts}/>)}/>
          <Route path='/contact/:id' component ={ContactDetails} />
          <Route path='/edit'  render={(props)=>(<EditContact {...props} updateContact = {updateContact}/>)} />
        </Switch >
      </Router>
    </div>
  );
}

export default App;
