import React, { useState } from "react";
import { createDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom";
import Breadcrumb from "../Breadcrumb"

export default function CreateDeck() {
  const initialFormState = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const history = useHistory();

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      const newDeck = await createDeck(formData);
      history.push(`/decks/${newDeck.id}`)
  }



  return (
    <div>
      <Breadcrumb isCreating={true}/>

      <h1>Create Deck</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Deck Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            rows="3"
            placeholder="Brief description of the deck"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <Link to={"/"}><button className="btn btn-secondary">Cancel</button></Link>
        <button className="btn btn-primary" type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}