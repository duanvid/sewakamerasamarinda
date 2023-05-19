import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ErrorPage from './pages/ErrorPage'
import Pricelists from './pages/Pricelists'
import RentalTerm from './components/RentalTerm'
import RentalTips from './components/RentalTips'
import Home from './pages/Home'
import Blog from './pages/Blog'
import AdminPage from './components/AdminPage'

import CreatePost from './components/CreatePost'
import LoginWithRedirect from './pages/LoginWithRedirect'
import Article from './components/Article'
import UserDashboard from './pages/UserDashboard'
import Payment from './components/Payment'

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Pricelists />,
      },
      {
        path: "pricelist",
        element: <Pricelists />
      },
      {
        path: "blog",
        element: <div>blog</div>
      },
      {
        path: "tips-memilih-kamera",
        element: <div>tips memilih kamera</div>
      }
    ]
  }
]) */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>} />
          <Route path='pricelist' element={<Pricelists/>} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/:articleId' element={<Article />} />
          <Route path='login' element={<LoginWithRedirect />} />
          <Route path='dashboard' element={<UserDashboard />} />
          <Route path='admin' element={<AdminPage />}>
            <Route path='create-post' element={<CreatePost />}/>
          </Route>
          <Route path='payment' element={<Payment />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
