import {createContext, useContext, useState} from "react";
import api from '../api/contacts';

const ContactsCrudContext = createContext()

export function ContactCrudContextProvider({children}){
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setsearchResult] = useState([])
    //retrieve the contacts
    const retriveContacts =async ()=>{
        const response = await api.get("/contacts");
        if(response.data) setContacts(response.data)
       }
   
    // add contacts
    const passContacts = async (cont)=>{
        const request = {
          id: Math.floor(Math.random() * 100),
          ...cont
        }
        const response = await api.post("/contacts" , request);
      setContacts([...contacts, response.data])
      }
    // update Contacts
    const updateContact = async (contact)=>{
        const response = await api.put(`/contacts/${contact.id}`, contact)
        const {id} = response.data;
        setContacts(contacts.map((contact) =>{
         return contact.id === id ? {...response.data} : contact
        }))
       }
    // remove or delete the contact 
    const removeContact= async (id)=>{
        await api.delete(`/contacts/${id}`)
        const newContact = contacts.filter(item =>{
          return item.id !== id
        })
        setContacts(newContact)
       }

    //search logic 
    const searchKeyHandler = (term)=>{
      setSearchTerm(term)
      if(term !== ''){
        const newSearchContact = contacts.filter((item)=>{
          return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(term.toLowerCase())
        })
        setsearchResult(newSearchContact)
      } else{
        setsearchResult(contacts)
      }
    }
    
    const value = {
        contacts,
        retriveContacts,
        removeContact,
        passContacts,
        updateContact,
        searchKeyHandler,
        searchTerm,
        searchResult
    }
    return <ContactsCrudContext.Provider value ={value} >
        {children}
    </ContactsCrudContext.Provider>

}

export function useContextCrud(){
    return useContext(ContactsCrudContext)
}
