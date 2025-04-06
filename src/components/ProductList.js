import {React, useEffect, useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench,faPlus,faTimes} from '@fortawesome/free-solid-svg-icons'
import { useLocation, useNavigate} from 'react-router-dom';
import './Products.css'
import axios from'axios'
import { Button } from 'react-bootstrap';


function ProductList() {
  const location = useLocation()
  const navigate = useNavigate()
  const [items,setItems] = useState([])
  const [no,setNo] = useState(0)
  const [value,setValue] = useState() 
 
  useEffect(()=>{
    async function getData() {
      try {
        const res = await axios.get(`http://localhost:8080/${location.state}`)
        setItems(res.data)
        setValue(location.state)
      } catch (error) {
        console.log(error)
      }
   }
   getData()
  },[location])
  
  return (
    <>
   
    <div className='container'>
     <br/>
     <div className='addbtn'>
      <div><h3>PRODUCTS DETAILS</h3></div>
      <div style={{"display":"flex"}}>
        <h3 style={{"marginRight":"40px"}}>ADD ITEMS</h3>
        <div className="icondiv addicondiv"><Button onClick={()=>navigate('/AddProduct', { state: {value:location.state} })}><FontAwesomeIcon icon={faPlus} size='lg'/></Button></div>
      </div>
      </div> 
      <hr className='headline'/>
        <table className="table table-striped table-light mt-3">
        <thead >
          <tr className="table-primary">
          <th scope="col">#</th>
            <th scope="col">IDNO</th>
            <th scope="col">ITEM</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">UPDATE</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item)=>(
            <tr>
              <th scope="row">{()=>setNo(no+1)}</th>
              <td>{item.idno}</td>
              <td>{item.item}</td>
              <td>{item.desc}</td>
              <td>{item.price}</td>
              <td>{item.image}</td>
              <td className="iconfield"><div className="icondiv"><Button onClick={()=>navigate('/Update', { state: {value:item,path:value} })}><FontAwesomeIcon icon={faWrench} /></Button></div></td>
              <td className="iconfield"><div className="icondiv"><Button onClick={()=>navigate('/Delete', { state: {value:item,path:value} })}><FontAwesomeIcon icon={faTimes} size='lg'/></Button></div></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList