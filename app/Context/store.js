'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
  data: [],
  setData: null,
});

export const GlobalContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  console.log(data);

  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
