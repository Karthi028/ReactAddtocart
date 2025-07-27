import { useLoaderData } from "react-router";
import Apiloader from "../loader/Apiloader";

const Home = ({cart,setcart}) => {

  const item = useLoaderData(Apiloader);

  console.log(item);
  console.log(cart);

  const hero = item.map((item) => {
    return <div key={item.id} className="w-50 p-4 rounded-2xl flex flex-col gap-3 justify-around shadow-2xl bg-white">
      <img className="size-40" src={item.image}></img>
      <p className="text-sm font-semibold">{item.title}</p>
      <p className="text-[10px]"><span className="font-semibold">Product Disc:</span> {item.description}</p>
      <p className="text-sm">${item.price}</p>

      <button className=" p-1 rounded-2xl text-sm shadow-xl border border-red-300" onClick={() => {
        const checkDuplicate = cart.some((car)=>car.id === item.id);
        if(checkDuplicate){
          alert('Poduct already available in Cart')
        }else{setcart([...cart,{...item,quantity:1}])}
        }}>Add to Cart</button>

    </div>

  });


  return <>
    <div className="p-3">
      <div className="flex flex-row flex-wrap justify-around gap-7 ">{hero}</div>
    </div>
  </>


}

export default Home;