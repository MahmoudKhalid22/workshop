import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/type";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "./redux/todoSlice";

function App() {
  const todos: ITodo[] = useSelector(
    (state: { todos: ITodo[] }) => state.todos
  );

  const dispatch = useDispatch();

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
              dispatch(clearAll());
              localStorage.clear();
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
