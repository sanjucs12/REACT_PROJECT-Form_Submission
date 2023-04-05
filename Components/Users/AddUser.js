import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

function AddUser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUserName,enteredAge,enteredEmail);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler}></input>
        <label htmlFor="email">E-Mail ID</label>
        <input id="email" type="email" onChange={emailChangeHandler}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
