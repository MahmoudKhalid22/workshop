import { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([""]);

  const handleAddTodo = (e: React.FormEvent, todo: string) => {
    e.preventDefault();
    setTodos(() => [...todos, todo]);
  };
  console.log("test", todos, todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Add onAddTodo={handleAddTodo} />
      <Todo todos={todos} />
    </>
  );
}

export default App;
