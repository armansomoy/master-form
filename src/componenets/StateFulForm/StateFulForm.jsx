import React, { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters longers");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" required />
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          required
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />

        <br />
        <input type="submit" value="Submit" />
        {error && <p style={{color: 'red'}}>{error}</p>}
      </form>
    </div>
  );
};

export default StateFulForm;
