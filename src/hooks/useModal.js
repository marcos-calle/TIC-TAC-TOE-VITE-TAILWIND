import { useState } from "react";

export const useModal = (initialValue = false) => {
  const [isOpen, setisOpen] = useState(initialValue);
  const openModal = () => setisOpen(true);
  const CloseModal = () => setisOpen(false);
  return [isOpen, openModal, CloseModal];
};
