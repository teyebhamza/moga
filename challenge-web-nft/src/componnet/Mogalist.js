import React from 'react';
import CollectionCard from './CollectionCard';

const Mogalist = ({mogaListData}) => {
  return (
  <div className='mogaList'>
      {mogaListData.map(moga  =>(  
         <div>
           <CollectionCard 
           Key = {moga.token_id}
           id={moga.token_id}
           name={moga.name}
           traits={moga.traits}
           image={moga.image_original_url}
           />  
         </div> 
      ))}
  </div>
  )
};

export default Mogalist;
