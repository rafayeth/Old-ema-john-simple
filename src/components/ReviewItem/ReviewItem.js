import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price} = props.product;
    const reviwItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    
    }
    return (
        <div style={reviwItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>quantity:{quantity}</p>
            <p>$price{price}</p>
            <br />
            <button onClick={() =>props.removeProduct(key)} className-='main-button'>remove</button>
        </div>
    );
};

export default ReviewItem;