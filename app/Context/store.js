'use client';

import { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({
  order: [],
  setOrder: null,
});

export const GlobalContextProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  console.log(order);

  return (
    <GlobalContext.Provider value={{ order, setOrder }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
