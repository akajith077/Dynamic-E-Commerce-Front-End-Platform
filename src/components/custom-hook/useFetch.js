import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  let [products, setProducts] = useState([]);
  let [error, setError] = useState("");
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // when we want to fetch multiple data (product list, user details for login) from database, we cant call many useEffect for each.
    //  instead of that we can use custom hook. and  (async await (here try catch is being used))
    /* in last session (see prodiuct.jsx), we have used fetch api with Promise(then catch block).
        but here we are using async await. so need to create a asynchronous function*/
    let fetchApi = async () => {
      try {
        // let response = await fetch(url);         /*fetch is the browser api method*/        /* await - here fetch() is asynchronous method. returns a promise right. await is used to wait until resolve or reject happens in fetch()*/
        
        let response = await axios.get(url)
        console.log(response.data);
        setProducts(response.data)
                 
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);
    
    return { products, error, isLoading ,setProducts}
    
}
export default useFetch;