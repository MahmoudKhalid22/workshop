import { ITodo } from "../types/type";
// import { useRecoilState } from "recoil";
// import { todoState } from "../atom/atom";
import { todoAtom } from "../mongezAtom/atom";
import { useTranslation } from "react-i18next";

const Todo = () => {
  // const [todos, setTodos] = useRecoilState(todoState);
  const { t } = useTranslation();
  const [todos, setTodos] = todoAtom.useState();

  const updateTodo = (id: number) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index === -1) return;

    const updatedTodos: ITodo[] = todos.map((todo: ITodo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };
  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  };

  const reversedTodos = todos
    .slice()
    .reverse()
    .sort((a, b) => {
      if (a.completed === b.completed) {
        return 0;
      }
      return a.completed ? 1 : -1;
    });
  return (
    <div>
      {reversedTodos.map((todo: ITodo, index: number) => (
        <div
          key={index}
          className={`${
            todo.completed
              ? "bg-[#ececec] text-slate-800 hover:bg-green-200"
              : "bg-blue-600 text-[#ececec] hover:bg-blue-800"
          }  my-4 flex flex-col md:flex-row gap-4 items-center justify-between px-8 py-8 rounded-xl cursor-pointer transition-colors `}
        >
          <div className="flex flex-col justify-start md:items-start">
            <h4 key={index} className="text-2xl font-semibold">
              {todo.title}
            </h4>
            <p className="text-lg font-medium">{todo.description}</p>
          </div>
          <p>{todo.date}</p>
          <p>
            {todo.completed ? (
              <span className="text-green-500 text-xl">{t("completed")}</span>
            ) : (
              <span className="text-red-700 text-xl">{t("uncompleted")}</span>
            )}
          </p>
          <div className="flex gap-4 ">
            <button
              className={`bg-[#15154b] hover:bg-[#333383] text-[#ececec] transition-colors`}
              onClick={() => {
                updateTodo(todo.id);
              }}
            >
              {todo.completed ? t("uncompleted") : t("completed")}
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 transition-colors"
              onClick={() => deleteTodo(todo.id)}
            >
              {t("delete")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
