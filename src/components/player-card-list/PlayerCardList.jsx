import React from "react";
import "./PlayerCardList.css";
import { Container, Row, Col } from "react-bootstrap";
const PlayerCardList = ({ players }) => {
  return (
    <Container>
      <Row>
        <h1>Roster</h1>
      </Row>
      <Row className="d-flex">
        {players.map((player) => (
          <Col xs="12" md="4" className="playerCard">
            <Row className="d-flex imgNum">
              <img src={player.img} />
              <h1 className="numberMask">{player.id}</h1>
            </Row>
            <Row className="d-flex">
              <Col xs="12">
                <h2 className="playerName">{player.name}</h2>
              </Col>
              <Col className="playerDetails">
                <p>{player.position}</p>
              </Col>
              <Col className="playerDetails">
                <p>{player.id}</p>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayerCardList;
