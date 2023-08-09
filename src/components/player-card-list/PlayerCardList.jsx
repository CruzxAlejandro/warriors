import React from "react";
import './PlayerCardList.css'
import { Container, Row, Col } from "react-bootstrap";
const PlayerCardList = ({players}) => {
    return (
        <Container>
            <Row><h1>Roster</h1></Row>
            <Row className="d-flex align-items-stretch">
            {players.map((player) => (                 
                    <Col xs="4" className="playerCard">
                    <Row className="d-flex imgNum">
                        <img src={player.img}/>
                        <h1 className="numberMask">{player.id}</h1>
                    </Row>        
                    <Row>
                    <h2 className="playerName">{player.name}</h2>
                    <Col className="playerDetails"><p>{player.position}</p><p>Position</p></Col>
                    <Col className="playerDetails"><p>{player.ht}</p><p>Height</p></Col>
                    <Col className="playerDetails"><p>{player.wt}</p><p>Weight</p></Col>
                    <Col className="playerDetails"><p>{player.id}</p><p>Number</p></Col>
                    </Row>                        
                    </Col>                 
            )
            )}
            </Row>   
        </Container>
    );
}


export default PlayerCardList;