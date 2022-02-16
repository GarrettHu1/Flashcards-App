import { Link } from "react-router-dom";
import React from "react";

export default function Breadcrumb({ deck, isEditing, isViewing, isStudying, isCreating }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        {isViewing && 
          (
            <div>
              
              <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
            </div>
          ) 
        }
        {
          isEditing && 
          (
            <div>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Edit Deck</li>
            </div>
          )
        }
        {
          isStudying &&
          (
            <div>
              <li className="breadcrumb-item" aria-current="page"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
              <li className="breadcrumb-item active">Study</li>
            </div>
          )
        }
        {
          isCreating &&
          (
            <div>
              <li className="breadcrumb-item active">Create Deck</li>
            </div>
          )
        }
      </ol>
    </nav>
  );
}