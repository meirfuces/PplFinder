import { useState, useEffect } from "react";
import axios from "axios";

import { initializeApp } from 'firebase/app';
import { getDatabase,set,ref } from "firebase/database";

    

export const useFavoriteFetch = () => {
//   const [users, setUsers] = useState([]);
  const [favorites, setfavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchFavorites();
   
  }, []);

  async function fetchFavorites() {

    setIsLoading(true);
    const response = await axios.get(`https://db-ppl-default-rtdb.firebaseio.com/favorites.json`).then(res=>{
    
    const a = Object.keys(res.data).map(k=> res.data[k])
    a.map(k=> [k])
 
 
    setfavorites(a[0]);

    })
    .catch(e=>{

    

    }    );
    setIsLoading(false);
  
 
    // setfavorites([response.data.results]);
 
    // setfavorites(response.data.results);
  }

  return {favorites, isLoading, fetchFavorites };
};
