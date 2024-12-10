import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Jquery from "./pages/Jquery";



export default function App() {

  return (
    <div className="wrap">
      <Navbar />
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/jquery" element={<Jquery />}></Route>
      </Routes>
    </div>
  )
}
