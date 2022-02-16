import React from "react";
import { Link } from "react-router-dom";
import { deleteDeck } from "../../utils/api";
import { useHistory } from "react-router-dom";
import { Eye, JournalBookmarkFill, Trash } from 'react-bootstrap-icons';

export default function Deck({deck}) {
  const history = useHistory();

    const handleDelete = async(deckId) =>{
        const result = window.confirm("Are you sure you want to delete this deck?");
        if(result){
          deleteDeck(deckId).then(history.go(0))
        }
       
    }


  return (
    <>
    <div className="card" style={{width: "500px", margin:"10px"}}>
      <div className="card-body" >
        <h5 className="card-title">{deck.name}</h5>
        <p className="card-subtitle mb-2 text-muted">{deck.cards.length} cards</p>
        <p className="card-text">
          {deck.description}
        </p>
        <Link to={`/decks/${deck.id}`}><button type="button" className="btn btn-secondary"><Eye /> View</button></Link>
        <Link to={`/decks/${deck.id}/study`}><button style={{ marginLeft: 10, }} type="button" className="btn btn-primary"><JournalBookmarkFill /> Study</button></Link>
        <button style={{ marginLeft: 235 }} type="button" className="btn btn-danger" onClick={() => handleDelete(deck.id)}><Trash /></button>
      </div>
    </div>

    </>
  );
}