import React, {useState} from 'react';
import Characterlist from './Character_list';
import Search from './Search';
import {characterData} from './data';
import "./character.style.scss";

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Character = () => {
  const classes = useStyles();

  const[searchText, setSearchText] =  useState('');

  const handleSearch = event => {
    setSearchText( event.target.value);
    
  }
  const filteredCharacters = characterData.filter( character => {
    return character.name.toLowerCase().includes(searchText.toLowerCase()) || character.campaign.toLowerCase().includes(searchText.toLowerCase())
  })

 return (
    <div >
    <Search value={searchText} onSearch={handleSearch} />
 
  
        
        
          <Paper className={classes.paper}> <Characterlist  characterData = {filteredCharacters} /></Paper>
      
    </div>
  );
}
export default Character;
