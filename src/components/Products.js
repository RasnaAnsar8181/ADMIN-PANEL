import {React} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from 'react-router-dom';
import './Products.css'
import { Button } from 'react-bootstrap';

function Products() {
    const navigate = useNavigate()
  return (
    <> 
    <div className='container'>
     <br/>
      <h3>PRODUCTS CATEGORY</h3>
      <hr className='headline'/>
        <table className="table table-striped table-light mt-3">
        <thead >
          <tr className="table-primary">
            <th scope="col">#</th>
            <th scope="col">ITEM</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><b>GROCERY</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/ProductList', { state: 'grocery' })}>LIST</Button></td>
            
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><b>KITCHEN</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/ProductList', { state: 'kitchen' })}>LIST</Button></td>
 
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><b>STATIONERY</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/Productlist', { state: 'stationery' })}>LIST</Button></td>
        
          </tr>
          <tr>
            <th scope="row">4</th>
            <td><b>VEGETABLES</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/ProductList', { state: 'veg' })}>LIST</Button></td>
         
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><b>CLEANING</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/ProductList', { state: 'cleaning' })}>LIST</Button></td>
           
          </tr>
          <tr>
            <th scope="row">6</th>
            <td><b>DAIRY</b></td>
            <td><Button style={{"color":"black"}} onClick={()=>navigate('/ProductList', { state: 'dairy' })}>LIST</Button></td>
            
          </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Products