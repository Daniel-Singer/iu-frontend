import { ReactNode, createContext, useContext, useState } from 'react';

interface IModalContext {
  open: boolean;
  toggleModal: () => void;
}

export const ModalContext = createContext<IModalContext | undefined>(undefined);

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <ModalContext.Provider value={{ open, toggleModal: () => setOpen(!open) }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      'useModalContext muss sich innerhalb von ModalContext befinden'
    );
  }
  return context;
};
