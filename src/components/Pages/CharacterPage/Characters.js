import React, {useState} from 'react';
import Characterlist from './Character_list';
import Search from './Search';
import {characterData} from './data';
import "./character.style.scss";


const Character = () => {

  const[searchText, setSearchText] =  useState('');

  const handleSearch = event => {
    setSearchText( event.target.value);
    
  }
  const filteredCharacters = characterData.filter( character => {
    return character.name.toLowerCase().includes(searchText.toLowerCase()) || character.campaign.toLowerCase().includes(searchText.toLowerCase()) || character.type.toLowerCase().includes(searchText.toLowerCase())
  })

 return (
    <div >
    <Search value={searchText} onSearch={handleSearch} />
    <Characterlist  characterData = {filteredCharacters} />
    </div>
  );
}
export default Character;
