import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/type";

function App() {
  const [todos, setTodos] = useState<ITodo[]>(
    JSON.parse(localStorage.getItem("todos") as string)
      ? JSON.parse(localStorage.getItem("todos") as string)
      : []
  );
  // const [error, setError] = useState<boolean>(false);
  // const [modal, setModal] = useState<boolean>(false);

  // const handleAddTodo = (e: React.FormEvent, todo: ITodo) => {
  //   e.preventDefault();
  //   setError(false);
  //   if (todo.title === "" || todo.description === "") {
  //     setError(true);
  //     return;
  //   }

  //   todo.id = Date.now();
  //   todo.completed = false;

  //   setModal(false);
  //   setTodos(() => [...todos, todo]);
  // };

  // const handleCompleted = (id: number) => {
  //   const todo: ITodo | undefined = todos.find((todo: ITodo) => todo.id === id);

  // if (todo === undefined) return;

  //   todo.completed = !todo.completed;
  //   setTodos([...todos]);
  // };

  // const handleDeleteTodo = (id: number) => {
  //   const updatedTodos = todos.filter((todo: ITodo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Add
      // onAddTodo={handleAddTodo}
      // error={error}
      // modal={modal}
      // onSetModal={setModal}
      />
      <Todo
      // todos={todos}
      // onUpdate={handleCompleted}
      // onDelete={handleDeleteTodo}
      // onSetModal={setModal}
      />
      {todos.length > 0 && (
        <button
          className="text-white bg-red-500 transition-colors hover:bg-red-600 w-full"
          onClick={() => {
            const sure = confirm("Are you sure?");
            if (sure) {
              setTodos([]);
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
