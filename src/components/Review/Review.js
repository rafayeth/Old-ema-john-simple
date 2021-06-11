import React, { createElement, useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart,processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif'
const Review = () => {
    const [cart, setCart] = useState([]);
   const[orderPlaced,setOrderPlaced]= useState(false)

   const handlePlaceOrder = ()=> {
       setCart([])
       setOrderPlaced(true)
       processOrder()
    

    console.log('order placed' )
   }
    const removeProduct = (productkey) =>{
        const newCart = cart.filter(pd=>pd.key !==productkey)
        setCart(newCart)
        removeFromDatabaseCart(productkey)
    }
    useEffect(()=>{
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
       const cartProducts = productKeys.map(key=>{
           const product = fakeData.find(pd=>pd.key===key)
           product.quantity = saveCart[key]
           return product
          
       })

      setCart(cartProducts)

    }, [])

    let thankyou ;
    if(orderPlaced){
        thankyou = <img src={happyImage} alt =""/>

    }
    return (
        <div className= 'twin-container'>
       
       <div className='product-container'>
       {
            cart.map(pd => <ReviewItem
            removeProduct={removeProduct}
                key={pd.key}
                product={pd}></ReviewItem>)
            
        }
       {
         thankyou  
       }

       </div>

       
       <div  className='cart-container'>
          
           <Cart cart={cart}>
               <button onClick={handlePlaceOrder} className='main-btn'>place order</button>
           </Cart> 

           
       </div > 
        </div>
    );
};

export default Review;