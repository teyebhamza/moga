import React from 'react';
import CollectionCard from './CollectionCard';

const Nftlist = ({ mogaListData }) => {
  return 
  <div className='nftList'>
      {mogaListData.map( moga  => (
          <div>
            <collectionCard 
            Key = {moga.token_id}
            id={moga.token_id}
            name={moga.name}
            traits={moga.traits}
            image={moga.image_original_url}
            />
          </div>

      ))}
  </div>;
};

export default Nftlist;
