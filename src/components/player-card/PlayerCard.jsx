import React from "react";
import "./PlayerCard.css"
import { Container, Button, Row, Col} from "react-bootstrap";

const PlayerCard = () => {
    return (
    <>
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
    <Container>
        <Row className="groupOne">
            <Col xl={3}>1</Col>
            <Col xl={3}>2</Col>
            <Col xl={3}>3</Col>
            <Col xl={3}>4</Col>
        </Row>
        <Row className="groupTwo">
            <Col xl={4}>1</Col>
            <Col xl={4}>2</Col>
            <Col xl={4}>3</Col>
        </Row>
    </Container>
    </>
    )
}

export default PlayerCard;