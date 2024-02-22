import React from 'react'

const Cart = (props) => {
    let cart=props.cart
  return (<>
  {cart.length==0&&<div>Your cart is empty</div>}
   {cart.length>0&& <div className='prodcon'>

    {
        cart.map((item,i)=>{
            return(<div className='card'>
                <div className='pimg'><img src={item.images[0]}/></div>
                <h3>NAME:{item.title}</h3>
                <p>{item.description}</p>
                <h3>Price:{item.price}</h3>
                <h3>Rating:{item.rating}</h3>
                <h3>Brand:{item.brand}</h3>
                <h3>Ctegory:{item.category}</h3>
                <h3><button onClick={()=>props.dec(i)}>-</button>{item.qty}<button onClick={()=>props.inc(i)}>+</button></h3>
                <h3>Total:{item.qty*item.price}</h3>
                <button onClick={()=>props.del(i)}>delcart</button>


                </div>)
        })
    }
</div>}

{cart.length!=0&&<div>Amt need to pay:{props.ctotal}</div>}
  </>)
}

export default Cart