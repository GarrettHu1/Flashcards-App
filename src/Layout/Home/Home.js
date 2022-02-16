import React from "react";
import DeckList from "../Deck/DeckList"
import { listDecks } from "../../utils/api";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { PlusLg } from "react-bootstrap-icons";


export default function Home(){
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        const ac = new AbortController();
        async function getDecks(){
            const data = await listDecks(ac.signal);
            setDecks(data);
        }getDecks();

        return () => ac.abort();
    }, [])

    return (
        <div>
            <Link to={"/decks/new"}><button className="btn btn-secondary" style={{marginLeft:"25px"}}><PlusLg /> Create Deck</button></Link>
            <DeckList decks={decks}/>
        </div>
    )
}