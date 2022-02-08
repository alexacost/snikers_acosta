import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { products } from "../data/products";
import { getItemFromId } from "../helpers/promises";
import { ItemCountTest } from "./ItemCountTest";

const Item = ({
  id,
  name,
  description,
  image,
  stock = 20,
  setSelectedItem,
}) => {
  const [stockSelected, setStockSelected] = useState(0);
  const [itemDescription, setItemDescription] = useState("");

  const getItemInfo = async () => {
    if (itemDescription) {
      setItemDescription("");
    } else {
      const response = await getItemFromId(id);
      if (response) setItemDescription(response[0].description);
      console.log(response);
    }
  };

  const selectItem = () =>
    setSelectedItem({ id, image, name, description, stock: stockSelected });
  return (
    <div className="col-md-4">
      <Card className="mt-3">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Nombre del producto: {name}</Card.Title>
          <Card.Text>
            <span>{itemDescription}</span>
            <Button variant="link" size="sm" onClick={getItemInfo}>
              {itemDescription ? "See Less" : "See More"}
            </Button>
          </Card.Text>
          <ItemCountTest stock={stock} setStockSelected={setStockSelected} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
