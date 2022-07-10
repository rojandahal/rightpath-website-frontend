import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './container/Home'
import AdminLoginPage from './container/Admin/Login/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AdminHomePage from './container/Admin/Home/Home'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rightpath/admin' element={<AdminLoginPage />} />
        <Route path='/rightpath/admin/homepage' element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  )
}
function App() {
  return <Main />
}

export default App
