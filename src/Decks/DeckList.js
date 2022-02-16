import React from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import deleteDeck from "../utils/api/index";
import CardList from "../Cards/CardList";
import ViewDeck from "./ViewDeck"

export default function DeckList({decks , setDecks}) {
  //on delete, filter through decks, dcurrentDeck.id !== deck.id
  
  const handleDelete = (deckId) => {
    const data = decks.filter((currentDeck)=> currentDeck.id !== deckId );
    setDecks(data)
  }
  
  return (
  <div>
      <ul>
      {decks.map((deck, index) => 
    <div className="card" key ={index} >
    <div className="card-body">
    <h5 className="card-title">{deck.name}</h5>
    <p className="card-text">{deck.description}</p>
    <a href={`/decks/${deck.id}/cards`} className="btn btn-primary">View</a>
    <button className="btn btn-primary">Study</button>
    <button onClick={() => handleDelete(deck.id)} className="btn btn-primary">Delete</button>
    </div>           
    </div>
   )}
     </ul>
  </div>
  )
}