import "./App.css";
import "./Component/MediaQuery.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from "./Component/Cards";
import Categories from "./Component/Categories";
import Navbar from "./Component/Navbar";
import ProductState from "./context/notes/ProductState";
import ViewProduct from "./Component/ViewProduct";

function App() {
  return (
    <>
      <ProductState>
        <BrowserRouter>
          <Navbar />
          <Categories />
          <Routes>
            <Route exact path="/" element={<Cards />}></Route>
            <Route exact path="/ViewDetailPage" element={<ViewProduct />}></Route>
          </Routes>
        </BrowserRouter>
      </ProductState>
    </>
  );
}

export default App;
