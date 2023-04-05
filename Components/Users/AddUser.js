import React from "react";

import Card from "../UI/Card";

import classes from "./AddUser.module.css";

import Button from "../UI/Button";

function AddUser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text"></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number"></input>
        <label htmlFor="email">E-Mail ID</label>
        <input id="email" type="email"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
