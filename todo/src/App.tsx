import { useTranslation } from "react-i18next";
import "./App.css";
import Add from "./components/Add";
import Header from "./components/Header";
import Todo from "./components/Todo";
import { todoAtom } from "./mongezAtom/atom";
import useLanguage from "./useLanguage";
import { useEffect } from "react";
import i18next from "i18next";
import Cookies from "js-cookie";

function App() {
  const [todos, setTodos] = todoAtom.useState();

  useEffect(() => {
    useLanguage();
  }, [Cookies.get("i18next")]);

  useEffect(() => {
    window.document.dir = i18next.dir() || "ltr";
  }, [Cookies.get("i18next")]);

  const { t } = useTranslation();
  return (
    <>
      <Header />
      <Add />
      <Todo />
      {todos?.length > 0 && (
        <button
          className="text-white bg-red-500 transition-colors hover:bg-red-600 w-full"
          onClick={() => {
            const sure = confirm(t("sure"));
            if (sure) {
              setTodos([]);
            }
          }}
        >
          {t("clear all")}
        </button>
      )}
    </>
  );
}

export default App;
