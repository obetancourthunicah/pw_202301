import { useState, useEffect } from "react";
import { getPokemonCards } from './PokemonService';

export const Pokemon = () => {
  const [pokeCards, setPokeCards] = useState([]);
  const [serviceState, setServiceState] = useState('init');
  const [serviceError, setServiceError] = useState('');
  const [page, setPage] = useState('');

  useEffect(
    ()=>{
      setServiceState('loading');
      console.log('page', page);
      getPokemonCards(page).then(
        (pokeCardsApi)=>{
          console.log('pokeCardsApi', pokeCardsApi);
          setServiceState('loaded');
          const newPokemonCards = new Set([...pokeCards, ...pokeCardsApi.results].map(o=>JSON.stringify(o)));
          setPokeCards(Array.from(newPokemonCards).map(o=>JSON.parse(o)));
        }
      ).catch(()=>{
        setServiceState('hasErrors');
        setServiceError("Error al Cargar Poke Cards");
      });
    }
    , [page]
  );
  const clickHandler = (e)=>{
    e.preventDefault();
    e.stopPropagation();
    console.log('clickHandler', pokeCards[pokeCards.length-1].cardId);
    const newPage = pokeCards[pokeCards.length-1].cardId;
    setPage(newPage);
  }
  return (
    <div>
      Service {serviceState}
      <br />
      {serviceError && serviceState !== 'loading' &&  `Error ${serviceError}`}
      <br />
      <hr />
      <ol>
      {pokeCards.map((o)=>{
        return (
          <li key={o.cardId}>{o.cardNumber} - {o.name} - {o.superType}</li>
        );
      })}
      </ol>
      <a onClick={clickHandler} >Next</a>
    </div>
  );
};
