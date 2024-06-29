import i18next from "i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const lng = Cookies.get("i18next");

function Header() {
  const [active, setActive] = useState(lng);

  const { t } = useTranslation();

  const handleChangeLng = (lng: string) => {
    i18next.changeLanguage(lng);
    setActive(lng);
  };

  return (
    <div className="my-4">
      <h2 className="text-md md:text-2xl font-normal my-2 md:my-8">
        {t("todo list")}
      </h2>
      <div className="flex gap-2 justify-center ">
        <button
          className={`${
            active === "ar"
              ? "bg-slate-600 text-green-300"
              : "bg-slate-300 text-green-700"
          } bg-slate-600 text-slate-300 transition-colors hover:bg-slate-800 font-semibold text-lg`}
          onClick={() => handleChangeLng("ar")}
        >
          AR
        </button>
        <button
          className={`${
            active === "en"
              ? "bg-slate-600 text-green-300"
              : "bg-slate-300 text-green-700"
          }  transition-colors hover:bg-slate-800 font-semibold text-lg`}
          onClick={() => handleChangeLng("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
}

export default Header;
