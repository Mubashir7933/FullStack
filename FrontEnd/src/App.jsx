import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [details, setDetails] = useState(0)
useEffect(() =>{
  axios.get('/api/details')
  .then((response)=>{
    setDetails(response.data)
  }
  )
  .catch((error)=>{
    console.log(error);
  })
})
  return (
    <>
     <h1>Mubashir Full stack </h1>
     <p>Details: {details.length}</p>

     {
     Array.isArray(details) && details.map((details, index) =>(
        <div key={details.id}>
          <h3>{details.name}</h3>
          <h4>{details.country}</h4>
        </div>
     ))
     }
    </>
  )
}

export default App
