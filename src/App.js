import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './container/Home'
import AdminLoginPage from './container/Admin/Login/Login'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AdminHomePage from './container/Admin/Home/Home'
import PrivateRoute from './utils/PrivateRoutes'

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          exact
          path='/rightpath/admin'
          element={
            <PrivateRoute>
              <AdminHomePage />
            </PrivateRoute>
          }
        />
        <Route path='/rightpath/admin/login' element={<AdminLoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
function App() {
  return (
    <div className='app'>
      <Main />
    </div>
  )
}

export default App
