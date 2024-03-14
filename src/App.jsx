import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ReusableForm from "./componenets/ReusableForm/ReusableForm";
import Grandpa from "./componenets/Grandpa/Grandpa";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign Up data:", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("Update Profile data:", data);
  };

  return (
    <>
    <Grandpa></Grandpa>
      {/* <ReusableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Please Sign Up</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            blanditiis?
          </p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        submitBtnText={"update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h2>Always Keep Your Profile Upto Date</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
            blanditiis?
          </p>
        </div>
      </ReusableForm> */}
    </>
  );
}

export default App;
