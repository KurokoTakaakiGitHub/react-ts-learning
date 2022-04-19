import { useState } from "react";
import { Todo } from "./Todo";
import axios from "axios";
import "./styles.css";
import { TodoType } from "./types/todo";
import { UserProfile } from "./UserProfile";
import { Text } from "./Text";
import { User } from "./types/user";

const user: User = {
  name: "テスト"
  //hobbies: ["映画", "料理"]
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="Red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
