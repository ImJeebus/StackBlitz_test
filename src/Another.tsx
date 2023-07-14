import React, {useEffect} from 'react';

const Another = () => {
  const URL = "https://jsonplaceholder.typicode.com/users"
  useEffect( () => {
    const dataFetch = async () => {
      const data = await fetch(URL)
      const json = await data.json()
      console.log(json)
    }
  }, [] )
  return "hello another"
};

export default Another