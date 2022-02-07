
import './App.css'
import Header from './Componnet/Header'
import CollectionCard from './Componnet/CollectionCard'
import React,  { useState, useEffect } from 'react'
import Mogalist from './Componnet/Mogalist'
import axios from 'axios'



function App() {
  
 const [mogaListData, setMogaListData] = useState([])
 useEffect(() => {
  const  getMyNfts = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x730423Ecf23A7a2C03DE96830df14BD7a1F691cb&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    setMogaListData(openseaData.data.assets)
  }
    return getMyNfts()  
}, []);
  
  return (
  <div className='app'>
  <Header />
  <CollectionCard 
   id={0} 
   name={'Beb Gaming'} 
   traits={[{'value': 2}]} 
   image='https://lh3.googleusercontent.com/K3OCl5WvuygA9QBSuk5MmznNneXh4cEl3aqk4NFTOr6siu1Ed3WBdxMUt7K5e7mC_xbv7UQVvJ_MgtgZPGXBm7Ce8uhqEi0c5-zNok0=w600' 
   />
  <Mogalist mogaListData={mogaListData} />
  </div>
  
  )
}

export default App;
