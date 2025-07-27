import { useNavigate } from "react-router"
import Home from "./Home";
import { useState } from "react";

const Taskbar = ({cart,setcart}) => {

    const navigate = useNavigate();

    return <div className="bg-blue-50">
        <div className="flex flex-row justify-between p-3 shadow-2xl rounded-xl ml-3 mr-3 mb-10">
            <h1 className="text-4xl">Fashion</h1>
            <button className="border p-1 w-30 text-xl rounded-2xl bg-white" onClick={()=>navigate('/cart')}><span className="text-red-400 font-semibold text-2xl pr-0.5">{cart.length}</span>Cart</button>
        </div>
        <Home
        cart={cart}
        setcart={setcart}/>
    </div>
}

export default Taskbar;