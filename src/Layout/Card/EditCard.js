import React, { useEffect, useState } from "react";
import Breadcrumb from "../Home/Breadcrumb"
import { useParams, useHistory } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "./CardForm";

export default function EditCard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();
  const [deck, setDeck] = useState([]);
  const [card, setCard] = useState({});

  useEffect(() => {
    const ac = new AbortController();

    async function getCard() {
        const theCard = await readCard(cardId, ac.signal);
        setCard(theCard);
        }
    async function getDeck() {
        const theDeck = await readDeck(deckId, ac.signal);
        setDeck(theDeck);
        }
    getCard();
    getDeck();

    return () => ac.abort();
  }, [deckId, cardId]);

    const handleSubmit = async (event) => {
    event.preventDefault();
    if (card.front.trim() ==="" || card.back.trim() ===""){window.alert('Please enter all fields')}
    else {await updateCard(card);history.push(`/decks/${deck.id}`);}
  };

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };


  
  return (
    <div>
      <Breadcrumb isEditingCard={true} deck={deck} cardId={cardId} />
      <h3>Edit Card</h3>
      <CardForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        card={card}
      />
    </div>
  );
}