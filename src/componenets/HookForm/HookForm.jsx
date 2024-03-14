import React, { useState } from "react";
import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const [name, handleNameChnage] = useInputState('')
    const nameState = useInputState('')


  const handleSubmit = (e) => {
    console.log('form data', nameState.value)
    e.preventDefault();
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input onChange={handleNameChnage} type="text" name="name" />  */}
        <input {...nameState} type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
