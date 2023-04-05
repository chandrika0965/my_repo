import React , {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import EditContact from './EditContact';
import {ContactCrudContextProvider} from '../context/ContactsCrudContext'

function App() {

  return (
    <div className="ui container">
      <Router>
      <Header />
      <ContactCrudContextProvider >
        <Routes >
          <Route path='/' 
          exact
          element ={<ContactList />}
          />
          <Route path='/add'
          element={<AddContact />} 
          />
          <Route path='/contact/:id' 
          element ={<ContactDetails />} />
          <Route path='/edit'
          element = {<EditContact />}
          />
        </Routes >
        </ContactCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
