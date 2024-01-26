import { useState } from "react";

export default function App() {
  const [obj, setObj] = useState({});
  const [err, setErr] = useState("");
  const changeHandler = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    const newObj = { ...obj, [`${name}`]: value };
    setObj(newObj);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (obj["username"] === "user" && obj["password"] === "password") {
      setErr("Welcome, user");
    } else {
      setErr("Invalid username or password");
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">
          Username:
        </label>
        <input
            id="username"
            onChange={changeHandler}
            name="username"
            type="text"
          />
        <br />
        <br />
        <label htmlFor="password">
          Password:
        </label>
        <input
            id="password"
            name="password"
            onChange={changeHandler}
            type="password"
          />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>{err}</p>
    </>
  );
}
