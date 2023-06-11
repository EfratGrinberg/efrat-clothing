import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {selectCurrentUser}from '../../store/user/user.selector';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from "../../components/cart-drop-down/cart-drop-down.component";
import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from './navigation.styles.jsx';
const Navigation = () => {
  const currentUser=useSelector(selectCurrentUser);
  // const { currentUser } = useContext(UserContext);
  const{isCartOpen}=useContext(CartContext);
  return (
    <Fragment>
      <NavigationContainer>

        <LogoContainer to="/">
          <CrwnLogo className="logo"></CrwnLogo>
        </LogoContainer>

        <NavLinksContainer>
        
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink  to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinksContainer>
        {isCartOpen && <CartDropDown/>}
      
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
