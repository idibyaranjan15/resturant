import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/Card.jsx";
import Template from "./components/Template.jsx";
import { ValueContextProvider } from "./context/valueContext.jsx";
import { RecoilRoot } from "recoil";
createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <ValueContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/card" element={<Card />} />
          <Route path="/temp" element={<Template />} />
        </Routes>
      </BrowserRouter>
    </ValueContextProvider>
  </RecoilRoot>
);
