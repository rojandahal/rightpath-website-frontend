import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import Home from "./container/Home";
import AdminPage from "./container/Admin/AdminPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminPageHome from "./container/Admin/AdminPageHome";

function Main () {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/rightpath/admin" element={<AdminPage/>}></Route>
      <Route path="/rightpath/admin/homepage" element={<AdminPageHome/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
function App() {
  return (
  <Main/>
  );
}

export default App;
