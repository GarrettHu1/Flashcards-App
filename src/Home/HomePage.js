import React from "react"
import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import { listDecks } from "../utils/api";
import DeckList from "../Decks/DeckList";

export default function HomePage() {
  const [ decks, setDecks ] = useState([]);
  const [error, setError] = useState(undefined);
  
  useEffect(() => {
    const abortController = new AbortController();

    async function getDecks() {
      const data = await listDecks(abortController.signal);
      setDecks(data);
    } getDecks();
  
  }, []);
  
    if (error) {
    return error;
  } 
  
  return (
  <div className="Home">
            <div>
              <button><Link to="/decks/new">Create Deck</Link></button>
            </div>
          <DeckList decks={decks} setDecks={setDecks}/>
        </div>
  )
}