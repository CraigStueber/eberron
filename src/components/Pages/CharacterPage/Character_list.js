import React from 'react';

const Characterlist =({characterData})=> {

   return  characterData.map( character =>{
    return(
    <div key={character.id}>
     <h1>{character.name}</h1>
     <br/>
     {character.type}
     <br/>
     {character.race}
     <br/>
     {character.Bio}
     <br/>
     {character.campaign}
     <br/>
     
   </div>
    )
  })
  }


export default Characterlist;
