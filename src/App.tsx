import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/main/Home";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import Tweet from "./pages/create-tweet/Tweet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Test</h1>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-tweet" element={<Tweet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
