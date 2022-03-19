import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickFeachData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFeachData}>データ取得</button>
    </div>
  );
}
