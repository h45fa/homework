import React from "react";
import AddToCart from "./AddToCart";
import ItemBody from "./Itembody";
import ItemDelete from "./ItemDelete";

const ItemList = () => {
  return (
    <div class="item">
      <div class="item__content">
        <ItemDelete />
        <ItemBody />
      </div>
      <AddToCart />
    </div>
  );
};

export default ItemList;
