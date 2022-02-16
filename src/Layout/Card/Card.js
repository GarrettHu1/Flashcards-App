import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api";
import { Pencil, Trash } from "react-bootstrap-icons";

export default function Card({ card, id }) {
  const { url } = useRouteMatch(); 
  const history = useHistory();
  
  const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete this card?");
    if (result) {
      deleteCard(id).then(history.go(0));
    }
  };
    // deletes card and refreshes
  return (
    <li key={card.id}>
      <div className="card" style={{ width: "500px" }}>
        <div className="card-body container">
          <div className="row">
            <div className="col">
              <p className="card-text">{card.front}</p>
            </div>
            <div className="col">
              <p className="card-text">{card.back}</p>
              <Link style ={{ margin: 10 }} to={`${url}/cards/${id}/edit`}>
                <button className="btn btn-secondary"><Pencil /> Edit</button>
              </Link>
              <button className="btn btn-danger"
                onClick={() => handleDelete(id)}><Trash /></button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}