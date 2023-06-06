import "./cart-drop-down.styles.scss";
import Button from '../button/button.component';
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
      <Button>Go To Cheackout</Button>        
    </div>
  );
};

export default CartDropDown;
