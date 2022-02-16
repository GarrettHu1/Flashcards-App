import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

export default function CreateCard() {
  const initialForm ={
    front:"",
    back:"",
  }
  const { deckId } = useParams();
  const [ formData, setFormData ] = useState(initialForm);
  const history = useHistory();
	
  const handleInputChange = (evt) => 
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  
  const onSubmit = (evt)=> {
    evt.preventDefault();
  }
  
  const onDone = (evt) => {
    evt.preventDefault();
    history.push(`/decks`)
  }
  
  return (
    
    <div>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="card-front">Front:</label>
        <textarea value={formData.front} onChange={handleInputChange} name="front" id="card-front" placeholder="Front side of card"/>
      </div>
      <div>
        <label htmlFor="card-back">Back:</label>
        <textarea value={formData.back} onChange={handleInputChange} name="back" id="card-back" placeholder="Back side of card" />
      </div>
      <div>
        <button onClick={onDone} type="button">Done</button>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  ); 
}