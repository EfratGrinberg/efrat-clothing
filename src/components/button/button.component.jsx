import { Base, GoogleSignInButton, InvertedButton } from "./button.styles";

export const Button_Type_Classes = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base"
};
const getButton = (buttonType = Button_Type_Classes.base) =>
  ({
    [Button_Type_Classes.base]: Base,
    [Button_Type_Classes.google]: GoogleSignInButton,
    [Button_Type_Classes.inverted]: InvertedButton
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
