import { RecoilRoot, useRecoilState } from "recoil";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { todoState } from "./atom/atom";

function App() {
  const [todos, setTodos] = useRecoilState(todoState);
  console.log(todos);
  return (
    <RecoilRoot>
      <Header />
      <Add />
      <Todo />
      {todos.length > 0 && (
        <button
          className="text-white bg-red-500 transition-colors hover:bg-red-600 w-full"
          onClick={() => {
            const sure = confirm("Are you sure?");
            if (sure) {
              setTodos([]);
            }
          }}
        >
          Clear All
        </button>
      )}
    </RecoilRoot>
  );
}

export default App;
