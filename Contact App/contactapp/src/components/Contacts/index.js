import React from 'react'
import './style.css'
import {useState,useEffect} from 'react'


import List from './List'
import Form from './Form'

function Contacts() {
  const [contacts ,setContacts] = useState([
    {
      fullName:"Barış",
      phoneNumber:"123456",
    },
    {
      fullName:"Çağdaş",
      phoneNumber:"562156",
    },
    {
      fullName:"Enes",
      phoneNumber:"654852",
    },
    {
      fullName:"Buse",
      phoneNumber:"326484",
    },
    {
      fullName:"Emre",
      phoneNumber:"785411",
    },
  ])

  useEffect(() => {
    console.log(contacts);
  },[contacts])

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts