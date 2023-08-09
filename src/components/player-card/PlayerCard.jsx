import React from "react";
import "./PlayerCard.css"
import { Container, Button, Row, Col} from "react-bootstrap";
import PlayerCardList from "../player-card-list/PlayerCardList";

const players =  [
    {name: "Stephen Curry", position: "PG", ht: "6'2", wt: "190", id: '30', img: "/public/images/Curry.png"},
    {name: "Klay Thompson", position: "SG", ht: "6'5", wt: "200", id: '11', img: "/public/images/Klay.png"},
    {name: "Draymond Green", position: "PF", ht: "6'7", wt: "210", id: '23', img: "/public/images/Dray.png"}
]

const PlayerCard = () => {
    return (
    <>
    <PlayerCardList players={players}/>
    </>
    )
}

export default PlayerCard;

/*
<Container className="containerOne">
<h1 className="playerHead">This is a player card</h1>
<p>This is where a playercard will go.</p>
<Button variant="primary">
    Player Card
</Button>
<Button variant="secondary">
    Player Card
</Button>
</Container>
*/