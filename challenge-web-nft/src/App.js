import logo from './logo.svg';
import './App.css';
import Header from './Componnet/Header';
import CollectionCard from './Componnet/CollectionCard';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [mogaListData, setMogaListData] = useState([])

  useEffect(()  => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
      'https://thirdweb.com/rinkeby/0x9501bbAebb2f0aF4233f2Fe38EA0ad7140b09461/nft-collection/0x730423Ecf23A7a2C03DE96830df14BD7a1F691cb'
      )
      console.log(openseaData.data.assets)
    }
    return getMyNfts()
  }, []);

  return (
  <div className='app'>
  <Header />
  <CollectionCard  id={0} name={'Bebars Game'} traits={[{'value': 2}]} image='https://lh3.googleusercontent.com/WOe0tE6yirvGltLk89jh2OumW4DKf1rWMSjPohYOMcg2QgfvbDupxdWEu-4cNZkgJk7XXvfTTAzexCnbR8ANTbh26Q8fHl9KTxb8uL8=w600'/>
  </div>
  )
}

export default App;
