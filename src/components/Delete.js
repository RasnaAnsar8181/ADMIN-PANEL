import React, { useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Delete() {
   const location = useLocation()
   const navigate = useNavigate()
   
   useEffect(()=>{
      async function deleteData(){
        try {
           await axios.delete(`http://localhost:8080/${location.state.path}/${location.state.value.idno}`) 
           alert("The document is successfully deleted");                     
        } catch(error){
           console.log(error)
        }
       }
       deleteData();        
       navigate('/ProductList', {state: location.state.path}) 
   },[])    
   
  return (
    
    <>
      
    </>
  )
}

export default Delete