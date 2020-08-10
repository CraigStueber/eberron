import React, {useState} from 'react';
import Characterlist from './Character_list';
import Search from './Search';
import {characterData} from './data';


const Character = () => {

  const[searchText, setSearchText] =  useState('');

  const handleSearch = event => {
    setSearchText(event.target.value);
  }
  const filteredCharacters = characterData.filter( character => {
    return character.name.includes(searchText) || character.race.includes(searchText) || character.campaign.includes(searchText) || character.type.includes(searchText)
  })

 return (
    <div >
    <Search value={searchText} onSearch={handleSearch} />
    <Characterlist characterData = {filteredCharacters} />
    </div>
  );
}
export default Character;
