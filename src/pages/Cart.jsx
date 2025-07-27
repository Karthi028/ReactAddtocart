import { useState } from "react"

const Cart = ({ cart, setcart }) => {

    function remover(id) {
        const validate = cart.filter((car) => car.id !== id);

        setcart(validate);

    };

    function setcount(id, change) {
        const updatecart = cart.map((car) => {
            if (car.id === id) {
                const newquantity = Math.max(1, car.quantity + change);
                return { ...car, quantity: newquantity };
            }
            else {
                return car;
            }
        });
        setcart(updatecart);

    };

    const totalPrice = cart.reduce((previous, current) => { return previous + current.price * current.quantity }, 0);
    const DicountedPrice = totalPrice.toFixed(2);
    console.log(DicountedPrice);

    const carts = cart.map((car) => {

        return <div className="flex  flex-col md:flex-row items-center justify-between gap-3 mt-3" key={car.id}>
            <div className="flex flex-row gap-1 sm:gap-10 items-center justify-around">
                <img className="size-[35%] sm:h-40 sm:w-40 p-2 md:p-5 shadow-xl sm:ml-3 rounded-2xl" src={car.image} />
                <div className="mr-5 sm:mr-0 w-[30%] sm:w-[80%] flex flex-col items-start gap-1">
                    <p className="text-wrap text-xs sm:text-sm md:text-lg">{car.title}</p>
                    <p className="text-xs italic">Price: ${car.price}</p>
                    <p className="text-lg">Total Price: $<span className="font-semibold">{car.price * car.quantity}</span></p>
                    <p className="text-sm mt-2">Count:<span className="text-red-400 font-semibold">{car.quantity}</span></p>
                    <div>
                        <button className="rounded-xl border p-1" onClick={() => setcount(car.id, -1)}>-</button>
                        <span> </span>
                        <button className="rounded-xl border p-1" onClick={() => setcount(car.id, 1)}>+</button>
                    </div>
                </div>
            </div>
            <button className="rounded-2xl border p-1 md:p-2 md:mr-[5%] w-[80%] md:w-auto mb-3 border-red-300" onClick={() => remover(car.id)}>Remove</button>
        </div>
    })

    return <div className="ml-[20%] mr-[20%] mt-2 shadow-2xl mb-2 rounded-2xl flex flex-col">
        <h1 className="text-center font-semibold p-2"><span className="text-red-400 text-xl">C</span>artItems</h1>
        <div className="mb-5">{carts}</div>
        <div className="text-center shadow-2xl p-2 w-[60%] mx-auto rounded-2xl font-semibold mb-5">
            <span className="text-red-400">T</span>otal Price:
            <span className="text-xl text-red-400 p-0.5 shadow-2xl rounded-2xl">${DicountedPrice}</span>
            <span className="text-xs">(10% Discounted)</span></div>
    </div>

}

export default Cart;