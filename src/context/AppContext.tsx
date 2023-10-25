import React, { ReactNode, useState, useMemo, Dispatch, SetStateAction } from 'react';

type TAppContext = {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

type TAppProvider = {
  children: ReactNode;
};
export const AppContext = React.createContext<TAppContext | undefined>(undefined);

export const AppProvider: React.FC<TAppProvider> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const contextValue = useMemo(
    () => ({ isModalOpen, setIsModalOpen, isEdit, setIsEdit }),
    [isModalOpen, setIsModalOpen, isEdit, setIsEdit]
  );


  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
