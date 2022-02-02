    import React from 'react';
    import weth from '../assets/pic/eth.png';
    import './CollectionCard.css';
    
    const CollectionCard = ({id, name, traits, image}) => {
      return (
      <div className='collectionCard'>
         <img src={image} alt='' className=''/> 
         <div className='details'>
        <div className='naùe'>
            {name} <div className='id'> .#{id}</div>
        </div> 
        </div>
        <div className='priceContainer'>
            <img src={weth} className='wethImage' alt=''/>
            <div className='price'>{traits[0] ?.value} </div>
        </div>
      </div>
      )
    }
    
    export default CollectionCard;
    