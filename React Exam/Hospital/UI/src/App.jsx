import React from 'react'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home'
import AddAppointment from './pages/AddAppointment';
import ViewAppointment from './pages/ViewAppointment';

const App = () => {
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route element={<AuthLayout/>}>
      <Route element={<MainLayout/>}>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/AddAppointment" element={<AddAppointment/>}/>
        <Route path="/ViewAppointment" element={<ViewAppointment/>}/>
      </Route>
    </Route>
    </>
  )
)

return (
  <>
  <RouterProvider router={router}/>
  </>
  
)
}

export default App