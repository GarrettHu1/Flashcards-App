import React, { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb"
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

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  // handles the submit of the cardform and redirects to the deckId deck page.
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateCard(card);
    history.push(`/decks/${deck.id}`);
  };
  
  // HTML return that displays the breadcrumb and card form component.
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