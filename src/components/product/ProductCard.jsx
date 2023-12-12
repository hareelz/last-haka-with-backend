import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/actions/freelancerActions";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { item } = props;

  const dispatch = useDispatch();
  return (
    <Card className="card_body">
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title className="card_title">{item.last_name}</Card.Title>
        <Card.Text className="card_subtitle">{item.first_name}</Card.Text>
        <Card.Text className="card_text">{item.what_i_can}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
