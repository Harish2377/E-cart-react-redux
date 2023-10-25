import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCart } from '../redux/slices/cartSlice'






function Cart() {

  const cartarray = useSelector((state)=>state.cartReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState()
  const navigate = useNavigate()

  const getCartTotal = ()=>{
    if(cartarray.length>0){

      setTotal(cartarray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
      
    }else{

      setTotal(0)

    }
  }

 useEffect(()=>{
  getCartTotal()
 },[cartarray])


 const handlecheckout = () =>{
  dispatch(emptyCart())
  alert("Order successfuly placed. Thank you for purchasing with us ")
  navigate('/')
 }


  return (
  
<div className='container' style={{marginTop:'100px'}}>

{
  cartarray.length>0?
<div className='row mt-5'>
  <div className='col-lg-7 '>
    <Table responsive="sm" className=' shadow '>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>image</th>
                <th>price</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {
                cartarray.map((product,index)=>(

                <tr key={index}>

                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt="" /></td>
                <td>{product.price}</td>
                <td><Button className='btn btn-light' onClick={()=>dispatch( removeCart(product.id) )} ><i className="fa-solid fa-trash text-danger fa-2x"></i></Button></td>
                
              </tr>

                ))
                
              }
              
            </tbody>
          </Table>
  </div>

  <div className='col-lg-1'></div>
  <div className='col-lg-4'>

    <div className="border p-3 rounded shadow">

              <div className="text-primary">
                <h1 className="text-primary">Cart Summary</h1>
                <h4 className='mt-3'>Total Products: <span>{cartarray.length}</span> </h4>
                <h4 className='mt-3'>Total : <span className='fs-2 text-danger fw-bolder'>${total}</span> </h4>
                <div className="d-grid mt-5">
                  <button className='btn btn-success rounded' onClick={handlecheckout}>Check Out</button>
                </div>
              </div>
      
    </div> 

  </div>


  </div>

: <div style={{height:'70vh'}} className=' w-100 d-flex flex-column justify-content-center align-items-center'>

<img height={'250px'} src="https://media2.giphy.com/media/LOL2XB5O5slfFE4K3M/giphy.gif?cid=6c09b952h672dht4zrx8audpefjlqcz5zb5oya5atp31r3ai&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" />
<h4 className='fw-bolder text-primary'>Your Cart is Empty!</h4>
<Link style={{textDecoration:'none'}} className='btn btn-success rounded mt-3' to={'/'}>Back to Home</Link> 

</div>
}
      
</div>
  )
}

export default Cart