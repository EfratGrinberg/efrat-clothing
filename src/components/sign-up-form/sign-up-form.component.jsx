import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  createUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss';
import Button from '../button/button.component'


const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("passwords do not match");

      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormField();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        console.log("cannot create user,email already in use");
      } else {
        console.log("user creation enounced an error", error);
      }
    }
  };

  const HandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account</h2>
      <span>sign up with your email & password</span>
      <form onSubmit={HandleSubmit}>
      <FormInput        
        label="Display Name"
          type="text"
          required
          onChange={HandleChange}
          name="displayName"
          value={displayName}
        />
        
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
       
        <FormInput
        label="Confirm Password"
          type="password"
          required
          onChange={HandleChange}
          name="confirmPassword"
          value={confirmPassword}
        />


        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
export default SignUpForm;
