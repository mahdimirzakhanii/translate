import { PiX } from "react-icons/pi";
import type { IData } from "../../context/DataContext";

type Show = {
  setShowModal: (showModal: boolean) => void;
  item: IData;
  selectLang: "fa" | "en";
};
const ModalWords = ({ setShowModal, item, selectLang }: Show) => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white shadow-2xl p-4 rounded-lg max-w-md w-full">
        <div className="flex justify-between pb-2 items-center mb-4">
          <h3 className="text-xl ">Translation Details</h3>
          <PiX
            className="cursor-pointer text-2xl"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="flex items-center flex-col w-full gap-3 justify-between">
          <div
            className={`flex items-center inset-shadow-lg p-2 gap-3 w-full
            ${selectLang === "fa" ? "flex-row-reverse" : "justify-start"}`}
          >
            <span className="text-lg text-blue-900">
              {selectLang === "en" ? "English :" : ": فارسی"}
            </span>
            <span className="text-lg text-blue-950 font-bold">
              {selectLang === "en"
                ? item.translations.en
                : item.translations.fa}
            </span>
          </div>
          <div
            className={`flex items-center inset-shadow-lg p-2 gap-3 w-full
            ${selectLang === "fa" ? "justify-start" : "flex-row-reverse"}`}
          >
            <span className="text-lg text-blue-900">
              {selectLang === "fa" ? "English :" : ": فارسی"}
            </span>
            <span className="text-lg text-blue-950 font-bold">
              {selectLang === "en"
                ? item.translations.fa
                : item.translations.en}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalWords;
