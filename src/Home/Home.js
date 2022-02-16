import React, { Fragment } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import DeckList from "./DeckList"
import listDecks from "../utils/api/index"

export default function Home() {
  
  
  
    return (
        <div className="Home">
            <div>
                <button>Create Deck</button>
            </div>
            <DeckList />
        </div>
    )
}