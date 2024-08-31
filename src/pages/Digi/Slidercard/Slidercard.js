import React, { useState, useEffect } from "react";
import "./Slidercard.css";
import { Carousel, Container, Row, Col, Card as BootstrapCard, Button } from "react-bootstrap";
import {SLIDERCARDS} from "../Products/Products"

function Slidercard() {
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const cardChunks = chunkArray(SLIDERCARDS, 4);

  return (
    <Container className="mt-5">
      <Carousel>
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((card, idx) => (
                <Col md={3} key={idx}>
                  <CardItem card={card} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
}
function CardItem({ card }) {
  return (
    <BootstrapCard className="mb-4">
      <BootstrapCard.Img variant="top" src={card.img} className="card-img-top" alt={card.title} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{card.title}</BootstrapCard.Title>
        <BootstrapCard.Text>{card.text}</BootstrapCard.Text>
        <p className="card-price text-muted">{card.price}</p>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Slidercard;
