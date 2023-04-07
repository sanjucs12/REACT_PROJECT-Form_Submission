import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const mailInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };
  // const emailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // };

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredNAme = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredUserEmail = mailInputRef.current.value;
    if (
      enteredNAme.trim().length === 0 ||
      enteredUserEmail.trim().length === 0 ||
      enteredUserAge.trim().length === 0 ||
      +enteredUserAge < 1
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid details",
      });
      return;
    }

    props.onAddUser(enteredNAme, enteredUserAge, enteredUserEmail);
    //console.log(enteredUserName, enteredAge, enteredEmail);
    // setEnteredUserName("");
    // setEnteredAge("");
    // setEnteredEmail("");
    nameInputRef.current.value='';
    ageInputRef.current.value='';
    mailInputRef.current.value='';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <label htmlFor="email">E-Mail ID</label>
          <input
            id="email"
            type="email"
            // value={enteredEmail}
            // onChange={emailChangeHandler}
            ref={mailInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
