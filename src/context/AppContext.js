import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  return <AppContext.Provider value={{ isModalOpen, setIsModalOpen, modalContent, setModalContent }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
