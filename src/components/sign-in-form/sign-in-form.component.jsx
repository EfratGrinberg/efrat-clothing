import { useState, useContext } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import Button, {Button_Type_Classes}from "../button/button.component";
// import { UserContext } from "../../contexts/user.context";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  // const { setCurrentUser } = useContext(UserContext);
  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const SignInWIthGoogle = async () => {
    await signInWithGooglePopup();    
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      // setCurrentUser(user);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("Email isnt found");
          break;
        default:
          console.log(error.code);
      }

      if (error.code == "auth/wrong-password") {
        alert("Incorrect password for email");
      }
      if (error.code == "auth/user-not-found") {
        alert("Email isnt found");
      }
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>sign in with your email & password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={HandleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={HandleChange}
          name="password"
          value={password}
        />

        <div className="button-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={Button_Type_Classes.google} onClick={SignInWIthGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SignInForm;
