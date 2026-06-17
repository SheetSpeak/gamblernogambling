import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [content, setC]=useState("No Data")

  async function asyncDataFetch (){
    const dataR = await axios.post("/posts/temp",{t:"hehe"})

    setC(dataR.data.t)

  }
  asyncDataFetch()

  return (
    <div className='w-full h-screen bg-red-100 grid items-center justify-items-center'>{content}</div>
  )
}

export default App
