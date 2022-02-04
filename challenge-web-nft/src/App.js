import logo from './logo.svg'
import './App.css'
import Header from './Componnet/Header'
import CollectionCard from './Componnet/CollectionCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Nftlist from './componnet/Nftlist'

function App() {
  const [mogaListData, setMogaListData] = useState([])

  useEffect(() => {
    const getMyNfts = async () => {
    const openseaData = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_adress=0x730423ecf23a7a2c03de96830df14bd7a1f691cb&order_direction=asc'
    )
    console.log(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])

  

  return (
  <div className='app'>
  <Header />
  <CollectionCard  id={0} name={'Bebars Game'} traits={[{'value': 2}]} image='https://lh3.googleusercontent.com/RF8LL60iCIM3QguKHVn4vaFzeG2_hn-NNigXbxQ78QXbgJCnR8PS-nDCD7PS73AEL3miz2adaSYxHF0f8GhvRzhBdFIkyZF9gnzL=w600'/>
  
  <Nftlist mogaListData={mogaListData} />
  </div>
  )
}

export default App;
