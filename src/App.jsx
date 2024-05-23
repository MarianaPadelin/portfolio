import './App.css'
import Layouts from "./components/layouts/Layouts.jsx"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { rutasApp } from "./routes/rutasApp.js";
import Error from "./components/pages/errors/Error.jsx";
import Home from './components/pages/Home.jsx';
function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route element={<Layouts />}>
            {rutasApp.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
