import React from "react";
import Card from "./Card";

export default function CardList({cards}) {
  // map through cards, send into Card component
  const cardList = cards?.map((card) => <Card card={card} id={card.id} key={card.id}/>)
  
  return (

    <div style={{listStyleType:"none"}}>
        {cardList}
    </div>   
  )
}