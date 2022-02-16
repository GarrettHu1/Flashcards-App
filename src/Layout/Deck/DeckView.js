import React, { useState, useEffect } from "react";
import { useParams, Link, useRouteMatch, useHistory } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { deleteDeck, readDeck } from "../../utils/api";
import CardList from "../Card/CardList";

export default function DeckView() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState([]);
  const {url} = useRouteMatch();
  
  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }getDeck();

    return () => ac.abort();
  },[deckId]);

  const deleteHandler = async () => {
    const resp = window.confirm("Are you sure you want to delete this deck?");
    if(resp){
      deleteDeck(deckId);
      history.push("/")
    }
  }

  return (
    <div id={"deck-view"}>
      <Breadcrumb deck={deck} isViewing={true} />
      <h3>{deck.name}</h3>
      <p>{deck.description}</p>
      <Link to={`${url}/edit`}><button className="btn btn-secondary">Edit</button></Link>
      <Link to={`${url}/study`}><button className="btn btn-primary">Study</button></Link>
      <Link to={`${url}/cards/new`}><button className="btn btn-primary">Add Cards</button></Link>
      <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
      <div id={"card-view"}>
        <h2>Cards</h2>
        <ul>
          <CardList cards={deck.cards}/>
        </ul>
      </div>
    </div>
  );
}