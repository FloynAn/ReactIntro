import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <img style={{height: '40px'}}
            src="https://img.favpng.com/0/19/5/warhammer-40-000-dawn-of-war-dark-crusade-warhammer-fantasy-battle-ork-dungeons-dragons-png-favpng-2e29ZeJjSfhF8C4LG4rGmZimX.jpg" alt="logo" />
            <p style={{fontWeight: 'bold', 
            fontSize: '30px'}}
            className='title'>ORKS</p>
            <button className='btn' 
            id='btnBoyz'>Boyz</button>
            <button className='btn' 
            id='btnLootas'>Lootas</button>
            <button className='btn' 
            id='btnBurnas'>Burnas</button>
            <button className='btn' 
            id='btnKillaCans'>KillaCans</button>
            <div>
                <input type="text" name="search" id="search" placeholder='search'/>
                <button className='btnSearch'>Search</button>  
            </div>

        </div>
    );
};

export default Navbar;