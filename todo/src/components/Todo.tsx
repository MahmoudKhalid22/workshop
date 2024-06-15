const Todo = ({ todos }: { todos: string[] }) => {
  // Create a new array in reverse order
  const reversedTodos = todos.slice().reverse();

  return (
    <div>
      {reversedTodos.map((todo: string, index: number) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default Todo;
