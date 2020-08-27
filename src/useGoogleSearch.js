import { useState, useEffect } from "react";
import API_KEY from "./keys";

const CONTEXT_KEY = "dc4e0b35eced5add7";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((result) => {
          //Whatever the result is of the json that we wrote above we're gonna set that data to that result.
          setData(result);
        });
    };
    fetchdata();
  }, [term]);

  return { data };
};

export default useGoogleSearch;

// AIzaSyCzqml33IDOyV6t24ldAOHqMAu01mAopBU

// SE ID: dc4e0b35eced5add7
