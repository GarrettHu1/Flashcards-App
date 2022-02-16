import React from "react";
import Deck from "./Deck";


export default function DeckList({decks}) {
  
  const deckList = decks.map((deck) => <Deck key={deck.id} deck={deck}/>)
  // map through decks, run each deck into Deck comp

  return (
    <div className="container">
      {deckList}
    </div>
  );
}