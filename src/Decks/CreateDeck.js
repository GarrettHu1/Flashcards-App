import React, { Fragment, useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

import readDeck from "../utils/api/index";
import { createDeck } from "../utils/api/index";


export default function Create({ decks, setDecks }) {
  //display create deck form
  //on submit, call CreateDeck function from utils api index, to add to db
  //
  const history = useHistory();
  const initialFormState= {
    name:"",
    description:"",
    cards:[],
  }
  
    const [ formData, setFormData ] = useState(initialFormState)
  
    const handleInputChange = (evt) => 
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    });
  
  const onCancel = (evt) => {
    evt.prevsadasdentDefault();
  history.go(-1)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    //call create deck function to push deck into db, using formData(holding title and desc) as param
    const ac = new AbortController();
    if (formData.name && formData.description) {
      //checks if there is name, and desc
      createDeck(formData, ac.signal); 
    } //if statement end 
    setFormData(initialFormState)
    //empties form after submit
    history.push(`/`)
    //on submit moves to home
  }
  
//   useEffect(() => {
//     const abortController = new AbortController();

//     async function create() {
//       const data = await createDeck(abortController.signal);
//     } create();
  
//   }, [handleSubmit]);
 
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
         <label htmlFor="name">Name:</label>
         <textarea value={formData.name} onChange={handleInputChange} name="name" id="name" />
       </div>
       <div>
         <label htmlFor="card-back">Description:</label>
         <textarea value={formData.description} onChange={handleInputChange} name="description" id="description" />
       </div>
       <div>
         <button onClick={onCancel} type="button">Cancel</button>
        <button type="submit">Submit</button>
       </div>
      </form>
      
      
      <Switch>
 
        <Route exact path="/decks/:deckId">

        </Route>
        <Route></Route>
      </Switch>
    </div>
  )
}