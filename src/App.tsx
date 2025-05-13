import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componetns/Home";
import Words from "./componetns/words/Words";
import WordManagement from "./componetns/manage/WordManagement";
import { DataProvider } from "./context/DataContext";
function App() {
  return (
    <div className=" bg-cover min-h-screen flex items-center justify-center m-0 p-5">
      <BrowserRouter>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/words" element={<Words />} />
            <Route path="/manage" element={<WordManagement />} />
          </Routes>
        </DataProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
