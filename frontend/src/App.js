import "./App.css";
import Create from "./components/Create";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="heading">ScotterSon Assesment</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/my-profile" element={<Profile />} />
          <Route path="/create-product" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
