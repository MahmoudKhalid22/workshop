import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { ITodo } from "./types/type";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);

  const handleAddTodo = (e: React.FormEvent, todo: ITodo) => {
    e.preventDefault();
    console.log(todo);

    if (
      todo.title === undefined ||
      todo.description === undefined ||
      todo.id === undefined
    ) {
      setError(true);
      return;
    }
    setModal(false);
    setTodos(() => [...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Add
        onAddTodo={handleAddTodo}
        error={error}
        modal={modal}
        onSetModal={setModal}
      />
      <Todo todos={todos} />
    </>
  );
}

export default App;
