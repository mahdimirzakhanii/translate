import { PiX } from "react-icons/pi";
import { useState } from "react";
import type { IData } from "../../context/DataContext";

type Show = {
  setShowModaManage: (showModal: boolean) => void;
  item: IData;
  selectLang: "en" | "fa";
  fullData: IData[];
  setFullData: (fullData: IData[]) => void;
};

const ModalManage = ({
  selectLang,
  fullData,
  setFullData,
  setShowModaManage,
  item,
}: Show) => {
  const [textInput, setTextInput] = useState<string>("");

  const handleUpdata = () => {
    const update = fullData.map((i: IData) =>
      i?.id === item?.id
        ? selectLang === "fa"
          ? { ...item, translations: { ...item?.translations, en: textInput } }
          : { ...item, translations: { ...item?.translations, fa: textInput } }
        : i
    );
    setFullData(update);
    localStorage.setItem("data", JSON.stringify(update));
    setShowModaManage(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl p-4 rounded-lg max-w-md w-full">
        <div className="flex justify-between pb-2 items-center mb-4">
          <span className="w-fit text-start px-3 py-1 rounded-md inset-shadow-lg">
            {selectLang === "en"
              ? item?.translations?.en
              : item?.translations?.fa}
          </span>
          <PiX
            className="cursor-pointer text-2xl"
            onClick={() => setShowModaManage(false)}
          />
        </div>
        <div className="flex items-center justify-between gap-5 w-full">
          <input
            onChange={(e) => setTextInput(e.target.value)}
            type="text"
            className="inset-shadow-md outline-none py-1.5 w-full px-3 rounded-md"
            defaultValue={
              selectLang === "en"
                ? item?.translations?.fa
                : item?.translations?.en
            }
          />
          <button
            className="border-2 border-blue-600 duration-300  hover:bg-blue-600 text-blue-700 hover:text-white cursor-pointer w-24 py-1 rounded"
            onClick={handleUpdata}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalManage;
