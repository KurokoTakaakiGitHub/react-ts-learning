import { useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<any>([]);

  const onClickFetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
