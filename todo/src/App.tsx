import { useRecoilState } from "recoil";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { todoState } from "./recoil/atom";

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  return (
    <>
      <Header />
      <Add />
      <Todo />
      {todos.length > 0 && (
        <button
          className="text-white bg-red-500 transition-colors hover:bg-red-600 w-full"
          onClick={() => {
            const sure = confirm("Are you sure?");
            if (sure) {
              localStorage.clear();
              setTodos([]);
            }
          }}
        >
          Clear All
        </button>
      )}
    </>
  );
}

export default App;
