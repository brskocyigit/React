import {useState} from 'react'

function InputExample() {

    const [name, setName]= useState("Barış");
    const [surname, setSurname] = useState("");

  return (
    <div>
        Please enter a name <br/>
        <input value={name} onChange={(e)=> setName(e.target.value)}/>
        <br/>
        Please enter a surname <br/>
        <input value={surname} onChange={(e)=> setSurname(e.target.value)}/>


    </div>
  )
}

export default InputExample