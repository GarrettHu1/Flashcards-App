import React, {useState, useEffect} from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyCard from "../card/StudyCard";
import Breadcrumb from "../breadcrumb/Breadcrumb";

export default function StudyDeck(){
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState([]);
    const [card, setCard] = useState({})
    const [isFlipped, setIsFlipped] = useState(false);
    const [deckLength, setDeckLength] = useState(0);
    const [currentPos, setCurrentPos] = useState(1);
    
    useEffect(() => {
        const ac = new AbortController();

        async function getDeck(){
            
            const _deck = await readDeck(deckId, ac.signal)
            setDeck(_deck);
            setCard(_deck.cards[0])
            setDeckLength(_deck.cards.length)
            setIsFlipped(false);
        } 
        getDeck();
        
        return () => ac.abort();
    }, [deckId])

    const flipHandler = () =>{
        setIsFlipped(!isFlipped)
    }

    const nextCardHandler = () =>{
        setCurrentPos(currentPos + 1)
        setIsFlipped(!isFlipped)
        if(currentPos !== deck.cards.length){
            setCard(deck.cards[currentPos])
        }
        else{
            const resp = window.confirm("Restart cards? Click 'cancel' to return to the home page");
            if (!resp){
                history.push("/");
            }else{
                setCard(deck.cards[1])
                setCurrentPos(1);
                setIsFlipped(false);
            }
        }  
    }

    return(
        <div>
            <Breadcrumb deck={deck} isStudying={true}/>
            <h1>{deck.name}: Study</h1>
            <div className="cards">
                {deckLength > 2 &&(<StudyCard isFlipped={isFlipped} flipHandler={flipHandler} card={card} length={deckLength} currentPos={currentPos} nextCardHandler={nextCardHandler}/>)}
                {deckLength < 3 &&(
                    <div>
                        <h2>Not enough cards.</h2>
                        <p>You need at least 3 cards to study. There are {deckLength} cards in this deck</p>
                        <Link to={`/decks/${deckId}/cards/new`}><button className="btn btn-primary">Add Cards</button></Link>
                    </div>
                )}
            </div>
        </div>
    )
}