import React from 'react'
import './Home.css'
const Home = (props) => {
    let prod=props.prod
  return (
    <div className='prodcon'>

        {
            prod.map((item,i)=>{
                return(<div className='card'>
                    <div className='pimg'><img src={item.images[0]}/></div>
                    <h3>NAME:{item.title}</h3>
                    <p>{item.description}</p>
                    <h3>Price:{item.price}</h3>
                    <h3>Rating:{item.rating}</h3>
                    <h3>Brand:{item.brand}</h3>
                    <h3>Ctegory:{item.category}</h3>
                    <button onClick={()=>props.addcart(i)}>Addcart</button>


                    </div>)
            })
        }
    </div>
  )
}

export default Home