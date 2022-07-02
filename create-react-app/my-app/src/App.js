import './App.css';

import User from './components/User'


const friends = [
  {
    id:1,
    name:'Ahmet'
  },
  {
    id:2,
    name:'Tayfun'
  },
  {
    id:3,
    name:'Gökhan'
  },
  {
    id:4,
    name:'Ayşe'
  },
]

function App(){

  return(
    <>
    <User 
    name="Barış"
    surname="Koçyiğit"
    age="23"
    isLoggedIn={true}
    friends={friends}
    address={{
        title: "Ataşehir/İstanbul",
        zip: 34200
    }}/>
    </>
  )
}

export default App