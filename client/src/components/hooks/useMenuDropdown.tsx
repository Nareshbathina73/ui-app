import React, { useState } from 'react';
const useMenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
};

export default useMenuDropdown;
