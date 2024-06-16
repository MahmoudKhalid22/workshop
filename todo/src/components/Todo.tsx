import { ITodo } from "../types/type";

const Todo = ({ todos }: { todos: ITodo[] }) => {
  // Create a new array in reverse order
  const reversedTodos = todos.slice().reverse();

  return (
    <div>
      {reversedTodos.map((todo: ITodo, index: number) => (
        <div className="bg-blue-600 text-[#ececec] my-4">
          <h4 key={index} className="text-2xl font-semibold">
            {todo.title}
          </h4>
          <p className="text-lg font-medium">{todo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Todo;
