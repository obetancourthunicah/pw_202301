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
      getPokemonCards(page).then(
        (pokeCardsApi)=>{
          setServiceState('loaded');
          setPokeCards([...pokeCards, ...pokeCardsApi.results]);
        }
      ).catch(()=>{
        setServiceState('hasErrors');
        setServiceError("Error al Cargar Poke Cards");
      });
    }
    , [page]
  );

  return (
    <div>
      Service {serviceState}
      <br />
      Error {serviceError}
      <br />
      <hr />
      <ol>
      {pokeCards.map((o)=>{
        return (
          <li key={o.cardId}>{o.cardNumber} - {o.name} - {o.superType}</li>
        );
      })}
      <a onClick={()=>{setPage(pokeCards[pokeCards.length-1].cardId)}} >Next</a>
      </ol>
    </div>
  );
};
