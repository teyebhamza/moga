import React from 'react';
import  './Header.css';
import mogalogo from '../assets/pic/image1.png';
import searchIcon from '../assets/pic/search.png';
import themeSwitch from '../assets/pic/themeswitch.png'
 const Header = () => {
  return (
    <div className='header'>
      <div className='logoContainer'>
        <img src={mogalogo} className='mogalogo' alt='' />
      </div>
      <div className='searchBar'>
          
          <input className='searchInput' placeholder='Search...'/>
      </div>
    <div className='headerItems'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
    </div>
    <div className='headerActions'>
        <div className='themeSwitchContainer'>
            <img src={themeSwitch} className='themeSwitch' alt=''/>
        </div>
    </div>
    <div>
        <button className='loginBtn'>Get in</button>
    </div>

    </div>
)
}

export default Header
