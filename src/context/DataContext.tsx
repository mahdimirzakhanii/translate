import { createContext, useEffect, useState, type ReactNode } from "react";
import data from "../data/data.json";

export interface IData {
  id: string;
  keyword: string;
  translations: {
    en: string;
    fa: string;
  };
}
interface IDataContext {
  fullData: IData[];
  setFullData: React.Dispatch<React.SetStateAction<IData[]>>;
}
interface IChild {
  children: ReactNode;
}
export const DataContext = createContext<IDataContext>({
  fullData: [],
  setFullData: () => {},
});

export const DataProvider = ({ children }: IChild) => {
  const [fullData, setFullData] = useState<IData[]>([]);
  const getData = JSON.parse(localStorage.getItem("data") || "null");
  useEffect(() => {
    if (!data) {
      localStorage.setItem("data", JSON?.stringify(data));
    }
    setFullData(getData);
  }, [data]);

  return (
    <DataContext.Provider value={{ fullData, setFullData }}>
      {children}
    </DataContext.Provider>
  );
};
