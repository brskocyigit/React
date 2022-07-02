import {useState, useEffect} from 'react'

const initialFormValues = {fullName: "", phoneNumber: ""};

function Form({addContacts, contacts}) {

  const [form, setForm] = useState(initialFormValues)

  useEffect(() =>{
    setForm(initialFormValues)
  },[contacts])

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(form.fullName === '' || form.phoneNumber === ''){
        return false;
    }

    addContacts([...contacts,form])
    console.log(form);

   
  }

  return (
    <>
        <form onSubmit={onSubmit}>
            <div>
                <input 
                name="fullName" 
                placeholder='FullName' 
                onChange={onChangeInput} 
                value={form.fullName}>
                </input>            
            </div>

            <div>
                <input 
                name="phoneNumber" 
                placeholder='PhoneNumber' 
                onChange={onChangeInput} 
                value={form.phoneNumber}>
                </input>
            </div>

            <div className='btn'>
                <button>Add</button>
            </div>

        </form>
    </>
  )
}

export default Form