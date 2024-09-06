import { useState , useEffect } from 'react'
import UserList from './userList'

export default function App() {
  const [searchText, setSearchText] = useState('')
  const [textInput,setTextInput] = useState('')
  const [data,setData] = useState([])

  useEffect(()=>{
    console.log("useEffect start...")
    return(
      setSearchText(textInput)
    )
  }) 

  console.log(data)

  return (
    <div className='p-2'>
      <h2 className='p-2'>Product Search{searchText}</h2>
      <hr />
      <label className='p-2'>Input text : {" "}</label>
      <input className='p-2 border-2 border-grey rounded' value = {textInput} onChange={e=>setTextInput(e.target.value)} />
      <UserList setData = {setData} searchText = {searchText} />
      {data?.map((item)=>(
        <li className='pl-2'>{item.title} | {item.category} | ${item.price}</li>
      ))}
      {/* <p>{JSON.stringify(data.title)}</p> */}
    </div>
  )
}

