import React from "react";
import ItemList from "../components/ItemList";
import "../../css/wishlist.css"

const Wishlist = () => {
  return (
    <body>
      <div class="container">
        <h2 class="wishlist__title">Wishlist</h2>
        <div class="list">
          <ItemList />
          <ItemList />
        </div>
      </div>
    </body>
  );
};

export default Wishlist;
