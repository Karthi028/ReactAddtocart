import axios from "axios"

const Apiloader = async ()=>{
   try {
      const response =  await axios.get('https://fakestoreapi.com/products');
      return response.data;
      
   } catch (error) {
      return [];
   }
   
}

export default Apiloader;
