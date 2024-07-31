import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Cart from './Cart'
import { removeFromCart } from '../store/slice'
function NewCart({IsCart}) {
    const data=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    const handlecart=(id)=>{
        removeFromCart(id)
    }
    
  return (
    <div >
        {
            data.map((element)=>(
                <div key={element.id}>
                <Cart
                img={element.img}
                title={element.title}
                company={element.company}
                color={element.color}
                IsCart={element.IsCart}
                />
                </div>
            ))
            
        }
        

    </div>
  )
}

export default NewCart