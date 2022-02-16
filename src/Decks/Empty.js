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

import CreateCard from "../Cards/CreateCard"

export default function decks() {
  return(
    <div>
      <Route>

      </Route>
    </div>
  )
}

// import React, { useEffect, useState } from "react";
// import {
//   Link,
//   NavLink,
//   Route,
//   Switch,
//   useParams,
//   useRouteMatch,
//   useHistory,
// } from "react-router-dom";


// export default function CardForm({
//   onSubmit,
//   onCancel,
//   submitLabel,
//   cancelLabel,
//   formData,
//   setFormData,
// }) {
  
  
//   const handleInputChange = (evt) => 
//     setFormData({
//       ...formData,
//       [evt.target.name]: evt.target.value
//     });
	
//   return (
//   return (
//     <form onSubmit={onSubmit}>
//       <div>
//         <label htmlFor="card-front">Front:</label>
//         <textarea value={formData.front} onChange={handleInputChange} name="front" id="card-front" />
//       </div>
//       <div>
//         <label htmlFor="card-back">Back:</label>
//         <textarea value={formData.back} onChange={handleInputChange} name="back" id="card-back" />
//       </div>
//       <div>
//         <button onClick={onCancel} type="button">{cancelLabel}</button>
//         <button type="submit">{submitLabel}</button>
//       </div>
//     </form>
//   ); 
// }