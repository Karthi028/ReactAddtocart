import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Taskbar from "./pages/Taskbar"
import './App.css'
import Cart from "./pages/Cart";
import Apiloader from "./loader/Apiloader";
import { useState } from "react";


const App = () => {

 const[cart,setcart] = useState([]);

 const routes = [
  {
    path:'/',
    element:<Taskbar
    cart={cart}
    setcart={setcart}/>,
    loader:Apiloader,
    hydrateFallbackElement:<div>Loading Data....</div>
  
  },
  {
    path:'/cart',
    element:<Cart
    cart={cart}
    setcart={setcart}/>
  }
];

 const router = createBrowserRouter(routes,{
  future:{
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,


  }
})

  return <RouterProvider
  router={router}
  future={{
    v7_startTransition: true,
  }}
  cart={cart}
  setcart={setcart}
  />
}

export default App