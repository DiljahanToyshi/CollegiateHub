import {  createBrowserRouter } from 'react-router-dom'
import '../index.css'
import Admissions from '../Component/Pages/Admission.jsx'
import CollegeDetails from '../Component/Pages/CollegeDetails.jsx'
import App from '../App'
import MyCollege from '../Component/Pages/MyCollege'
import Home from '../Component/Home/Home'
import Profile from '../Component/Profile/Profile'
 import Login from '../Component/Pages/Login'
 import Register from '../Component/Pages/Register'
import AdmitCollege from '../Component/Pages/AdmitCollege'
import Colleges from '../Component/Pages/Colleges'
import PrivateRoute from './PrivateRoute'
import ErrorPage from '../Component/ErrorPage'
export const router = createBrowserRouter([
    {
      path:'/',
      element:<App></App>,
      errorElement: <ErrorPage></ErrorPage>,

      children:[
        {
            path:'/',
            element:<Home></Home>
          },
        {
          path:'/mycollege',
          element:<MyCollege></MyCollege>
        },
        {
          path:'/colleges',
          element:<Colleges></Colleges>
        },
        {
          path:'/admission',
          element:<Admissions></Admissions>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<CollegeDetails></CollegeDetails>
        },
        {
          path:'/enroll/:id',
          element:<PrivateRoute><AdmitCollege></AdmitCollege></PrivateRoute>
        }
 ] }
   
  ])