import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

const dataContext = createContext();

function Context({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const newdata = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setData(newdata);
    };

    fetchData();
  }, []);

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export { dataContext, Context };
