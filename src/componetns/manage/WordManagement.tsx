import { useContext, useState } from "react";
import ModalManage from "./ModalManage";
import { DataContext } from "../../context/DataContext";

const WordManagement = () => {
  const { fullData, setFullData } = useContext(DataContext);
  const [showModaManage, setShowModaManage] = useState<boolean>(false);
  const [idWords, setIdWords] = useState<string | null>(null);
  const selectedLang = JSON.parse(localStorage.getItem("lang") || "null");
  const [selectLang, setSelectLang] = useState<"en" | "fa">(selectedLang);
  return (
    <div className="flex flex-col w-[500px] h-[700px] items-center rounded-lg p-3 inset-shadow-lg bg-white/10  gap-5">
      <div className="flex items-center w-full justify-between">
        <span className="text-3xl font-bold text-blue-800">
          Word Translations
        </span>
        <select
          value={selectLang}
          onChange={(e) => {
            const lang = e.target.value as "en" | "fa";
            setSelectLang(lang);
            localStorage.setItem("lang", JSON.stringify(lang));
          }}
          className="flex items-center justify-center w-28 py-1.5 outline-none cursor-pointer px-1 rounded-md inset-shadow-md text-blue-950 "
        >
          <option value="fa">فارسی</option>
          <option value="en">English</option>
        </select>
      </div>
      <div className="flex flex-col w-full overflow-y-auto px-3 gap-5">
        {fullData?.map((item) => (
          <div
            key={item?.id}
            onClick={() => setIdWords(item?.id)}
            className="flex items-center p-3 rounded-md justify-between w-full inset-shadow-md"
          >
            <span className=" text-blue-900">
              {selectLang === "en"
                ? item?.translations?.en
                : item?.translations?.fa}
            </span>
            <button
              className=" rounded-md cursor-pointer inset-shadow-lg hover:inset-shadow-md w-32 py-2"
              onClick={() => setShowModaManage(true)}
            >
              {selectLang === "en"
                ? item?.translations?.fa
                : item?.translations?.en}
            </button>
          </div>
        ))}
      </div>
      {showModaManage && (
        <ModalManage
          selectLang={selectLang}
          item={fullData.find((item) => item?.id === idWords)!}
          fullData={fullData}
          setFullData={setFullData}
          setShowModaManage={setShowModaManage}
        />
      )}
    </div>
  );
};

export default WordManagement;
