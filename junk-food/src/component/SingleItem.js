import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const singleItem = (props) => (
    <Container>
        <Row><Col><strong>{props.type[0].name}</strong></Col></Row>
        <hr />
        <Row>
           <Col><img width={48} height={48} src={props.type[0].image} alt="junk-food"/></Col>
            <Col>{props.type[0].calorieIntake}</Col>
            <Col>{props.type[0].fat}</Col>
           <Col>{props.type[0].sugar}</Col>
        </Row>
        <hr />
    </Container>
);

export default singleItem;