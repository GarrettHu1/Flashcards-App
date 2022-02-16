import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateDeck, readDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb"
import DeckForm from "./DeckForm";

export default function EditDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const history = useHistory();
  const [deck, setDeck] = useState(initialFormState);
  const { deckId } = useParams();

  const handleChange = ({ target }) => {
    setDeck({
      ...deck,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateDeck(deck);
    history.push(`/decks/${deck.id}`);
  };

  useEffect(() => {
    const ac = new AbortController();

    async function getDeck() {
      const theDeck = await readDeck(deckId, ac.signal);
      setDeck(theDeck);
    }

    getDeck();
    return () => ac.abort();
  }, [deckId]);

  return (
    <div>
      <Breadcrumb deck={deck} isEditingDeck={true} />
      <h1>Edit Deck</h1>
      <DeckForm
        formData={deck}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}