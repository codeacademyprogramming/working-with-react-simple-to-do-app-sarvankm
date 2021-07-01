import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import "./Todo.css";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const myArrMadeFromForEach = [];

  const pushTitle = () => {
    setTodos([...todos, title]);
  };
  let count = 0;
  todos.forEach((val) => {
    count++;
    myArrMadeFromForEach.push(
      <ListGroup.Item key={count} id={count}>
        {val}
        <p style={{ textAlign: "right" }}>x</p>
      </ListGroup.Item>
    );
  });
  return (
    <>
      <h1>To do app</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Form.Control
          type="text"
          placeholder="enter a todo"
          className="custom-input"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <Button
          style={{ flex: 1, whiteSpace: "nowrap", marginLeft: "16px" }}
          onClick={pushTitle}
        >
          Add todo
        </Button>
      </div>
      <ListGroup style={{ display: "inline-block", width: "79.8%" }}>
        <div style={{ marginTop: "10px" }}>{myArrMadeFromForEach}</div>
      </ListGroup>
    </>
  );
};
