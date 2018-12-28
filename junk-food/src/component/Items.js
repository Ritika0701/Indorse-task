import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const items = (props) => (
    <Container>
        <Row><Col><strong>{props.type.name}</strong></Col></Row>
        <hr />
        <Row>
           <Col><img width={48} height={48} src={props.type.image} alt="junk-food"/></Col>
            <Col>{props.type.calorieIntake}</Col>
            <Col>{props.type.fat}</Col>
           <Col>{props.type.sugar}</Col>
        </Row>
        <hr />
    </Container>
);

export default items;