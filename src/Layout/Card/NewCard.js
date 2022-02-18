import React, { useState, useEffect } from "react";
import Breadcrumb from "../Home/Breadcrumb"
import { useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "./CardForm";

export default function NewCard() {
  const history = useHistory();
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({front:"", back:"",});
  const { deckId } = useParams();

  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }getDeck();

    return () => ac.abort();
  }, [deckId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (card.front.trim() ==="" || card.back.trim() ===""){window.alert('Please enter all fields')}
    else {await createCard(deckId, card);history.push(`/decks/${deck.id}`);}
  };
  //displays warning if submitted with empty fields
  
  const handleChange = ({ target }) => {
    setCard({
        ...card,
      [target.name]: target.value,
      deckId,
    });
  };
  
  return (
    <div>
      <Breadcrumb isNewCard={true} deck={deck} />
      <CardForm handleChange={handleChange} handleSubmit={handleSubmit} card={card}/>
    </div>
  );
}