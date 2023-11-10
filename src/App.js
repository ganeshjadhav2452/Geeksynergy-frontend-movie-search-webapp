import React, { lazy, Suspense } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// .azy loaded components 
const PrivateRoute = lazy(() => import('./routes/PrivateRoute'))
const Movies = lazy(() => import('./pages/Movies/Movies'))
const SingUp = lazy(() => import('./pages/Auth/SingUp'))
const Login = lazy(() => import('./pages/Auth/Login'))
const CompanyInfo = lazy(() => import('./pages/CompanyInfo/CompanyInfo'))

const App = () => {
  return (
    <div className='App'>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          {/* public routes */}
          <Route path='/' element={<Login />} />
          <Route exact path='/sign-up' element={<SingUp />} />

          {/* private routes */}
          <Route path='/' element={<PrivateRoute />}>
            <Route exact path='dashboard' element={<Movies />} />
            <Route exact path='company-info' element={<CompanyInfo />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App