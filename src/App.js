import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Inventory from "./Pages/Inventory/Inventory";
import Header from "./Pages/Shared/Header/Header";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:id"
          element={<ItemDetail></ItemDetail>}
        ></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
