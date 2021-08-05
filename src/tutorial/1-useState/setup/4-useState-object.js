import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random messege",
  });
  const changeMessege = () => {
    setPerson({ ...person, message: "hello world" });
  };
  return (
    <>
      {" "}
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button type="button" className="btn" onClick={changeMessege}>
        change messege
      </button>
    </>
  );
};

export default UseStateObject;
