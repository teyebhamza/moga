import logo from './logo.svg';
import './App.css';
import Header from './Componnet/Header';
import CollectionCard from './Componnet/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const[mogaListData, setMogaListData] = useState([])

    useEffect(()  => {
      const getMyNfts = async () => {
        const openseaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_adress=0xdaF08C5F7Ed1E998D8205B86109A239Abf8E0633&order_direction=asc'
        )
        console.log(openseaData.data.assets)
      }
      return getMyNfts()
    }, [])

  return (
  <div className='app'>
  <Header />
  <CollectionCard  id={0} name={'Bebars Game'} traits={[{'value': 2}]} image='https://lh3.googleusercontent.com/WOe0tE6yirvGltLk89jh2OumW4DKf1rWMSjPohYOMcg2QgfvbDupxdWEu-4cNZkgJk7XXvfTTAzexCnbR8ANTbh26Q8fHl9KTxb8uL8=w600'/>
  </div>
  )
}

export default App;
