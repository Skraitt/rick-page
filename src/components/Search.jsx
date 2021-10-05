import React, { useEffect, useState } from 'react';
import '../assets/styles/components/Search.scss';
import '../assets/styles/components/Card.scss'

export default function Search() {

  const API = 'https://rickandmortyapi.com/api/character/?name=';

  const [ search, setSearch ] = useState("");
  const [ characters, setCharacters ] = useState([]);
  const [ character, setCharacter ] = useState([]);
  const [ card, setCard ] = useState(false);


  const handleSearch = e => {
    setSearch(e.target.value);
  }

  const generateLink = (string) => {
    const linkSearch = `${API}${string}`;
    return linkSearch;
  }

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(generateLink(search));
        const data = await response.json();
        return setCharacters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

  },[search]);

  const visibilityMain = () => {
    const main = document.querySelector()
  }


  const selectCharacter = (index) => {
    setCharacter(characters.results[index]);
    setSearch("");
    setCard(true);
  }

  const close = () => {
    setCard(false);
  }


  return (
    <div className='search'>
      <input value={ search } onChange={handleSearch} className='search--input' type='text' placeholder='Name character...' />
      {
        search.length != 0 ?
        <span className='search__box' >
          <ul className='search__box__list'>
            {
              (search.length != 0 && characters.results != undefined ) ?
              characters.results.map( (character, index) => (
                <li key={character.id} className="search__box__list--item" onClick={() => selectCharacter(index)} >{character.name} | Specie: {character.species} | Dimension: {character.origin.name}</li>
              )) : <li className="search__box__list--item" >Search not found</li>
            }
          </ul> 
        </span> : null
      }
      {
        (character.id != undefined && card == true) ?   
        <div className='card__container'>      
          <div className='card'>
            <header className="card__header">
              <button className="card__header__close " onClick={close} ><img className="card__header__close--icon" src="https://img.icons8.com/ios-glyphs/30/ffffff/macos-close.png" alt="close" /></button>
            </header>
            <img className="card__image" src={character.image} alt={character.name} />
            <div className="card__info">
                <h5 className="card__info--item">Name: {character.name}</h5>
                <h5 className="card__info--item">Status: {character.status}</h5>
                <h5 className="card__info--item">Specie: {character.species}</h5>
                <h5 className="card__info--item">Origin: {character.origin.name}</h5>
            </div>
          </div>
        </div> : null
      }
    </div>
  )
}
