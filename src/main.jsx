import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import ErrorPage from './components/ErrorPage'
import Pricelists from './components/Pricelists'

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
        <Route path='/' element={<App/>} >
          <Route path='/' element={<Pricelists/>} />
          <Route path='pricelist' element={<Pricelists/>} />
          <Route path='blog' element={<div>blog</div>} />
          <Route path='tips-memilih-kamera' element={<div>tips memilih Kamera</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
