import "./product-card.styles.scss";
import Button, { Button_Type_Classes } from "../button/button.component";
// import SHOPDATA from "../../shop-data.json";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { InvertedButton } from "../button/button.styles";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-containr=er">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={Button_Type_Classes.inverted}
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
