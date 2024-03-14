"use client";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ isOpen: false, content: null });

  const openModal = (content) => {
    setModal({ isOpen: true, content });
  };

  const closeModal = () => {
    setModal({ isOpen: false, content: null });
  };

  return (
    <ModalContext.Provider value={{ ...modal, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
