import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Main from "./components/Main/Main";

import Produtos from "./components/Products/Products";
import SobreNos from "./components/SobreNos/Sobre";
import Contato from "./components/Contato/Contato";
import "./Styles/style.scss";

function App() {
  return (
    <div className="App animeLeft">
      <BrowserRouter>
        <div className="content">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
