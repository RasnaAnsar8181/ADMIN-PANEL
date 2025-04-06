import React, { useEffect, useState} from 'react'
import './AddProduct.css';
import axios from 'axios';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

function Update() {
    const location = useLocation()
    const [value,setValue] = useState(location.state.value)
    const [idno,setIdno] = useState(value.idno)
    const [item,setItem] = useState(value.item)
    const [desc,setDesc] = useState(value.desc)
    const [price,setPrice] = useState(value.price)
    const [image,setImage] = useState(value.image)
    const navigate = useNavigate()
    
    useEffect(()=>{
      try {
        setValue(location.state.value)
      } catch (error) {
        console.log("error")
      }    
    },[location])
   
    async function saveInfo(){      
      try{
        setIdno(idno)
          await axios.put(`http://localhost:8080/${location.state.path}/${location.state.value.idno}`,{idno:idno,item:item,desc:desc,price:price,image:image,qty:0})        
          alert("Data is successfully updated")
          navigate('/ProductList',{state:location.state.path})
        } catch (error) {
           console.log(error) ;
        } 
    }
 
  return (
    <>

    <div className='container'>
        <br/><br/>
        <div>
            <h3>ADD Item Details</h3>
        </div>
        <hr className='headline'/>
      <div className="content">    
      <Form>
      <br/>
      <Row className="m-2"> 
        <Form.Group as={Col} controlId="idno">
          <Form.Label><b>IDNO</b></Form.Label>
          <Form.Control style={{"border-bottom":"2px solid blue"}} type="number" placeholder={idno} disabled />
        </Form.Group>

        <Form.Group as={Col} controlId="item">
          <Form.Label><b>ITEM</b></Form.Label>
          <Form.Control style={{"border-bottom":"2px solid blue"}} type="text"  placeholder={item}  onChange={(e)=>setItem(e.target.value)}/>
        </Form.Group>
      </Row>
      <Row className="m-2">

        <Form.Group as={Col} controlId="desc">
          <Form.Label><b>DESCRIPTION</b></Form.Label>
          <Form.Control style={{"border-bottom":"2px solid blue"}} type="text" placeholder={desc}  onChange={(e)=>setDesc(e.target.value)}/>
        </Form.Group>
      </Row>
      <Row className="m-2">
        <Form.Group as={Col} controlId="price">
          <Form.Label><b>PRICE</b></Form.Label>
          <Form.Control style={{"border-bottom":"2px solid blue"}} type="number" placeholder={price}  onChange={(e)=>setPrice(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="img">
          <Form.Label><b>IMAGE</b></Form.Label>
          <Form.Control style={{"border-bottom":"2px solid blue"}} type="text" placeholder={image} onChange={(e)=>setImage(e.target.value)}/>
        </Form.Group>
      </Row>
      <div className='btndiv'>
           <Button className='itemsbtn'onClick={()=>navigate('/Products')}>BACK</Button>
           <Button className='itemsbtn'onClick={saveInfo}>SAVE</Button> 
      </div> 
    </Form>    
    </div> 
    </div> 
    </>
  )
}

export default Update