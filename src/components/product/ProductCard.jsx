import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/actions/productActions";

const ProductCard = (props) => {
  const { item } = props;

  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.category.title}</Card.Text>
        <Card.Text>Author: {item.author}</Card.Text>

        {item.is_author && (
          <>
            <Button
              variant="primary"
              onClick={() => dispatch(deleteProduct(item.id))}
            >
              Delete
            </Button>
            <Link to={`/edit/${item.id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
