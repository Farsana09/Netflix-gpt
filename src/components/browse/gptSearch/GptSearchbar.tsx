import { useTranslation } from "react-i18next";
const GptSearchbar = () => {
  const { t } = useTranslation();
  return (
    <div className="pt-[10%]  flex justify-center">
      <form className=" bg-black rounded-xl w-1/2 grid grid-cols-12" action="">
        <input
          className="p-4 m-4 bg-white rounded-lg col-span-9 "
          type="text"
          placeholder={t("whatToWatch")}
        />
        <button className="py-2 px-4 m-4 text-white bg-red-700 rounded-lg col-span-3">
          {t("search")}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
