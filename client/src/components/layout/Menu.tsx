import React from 'react';
import { MenuItem, MenuList } from '@mui/material';

interface MenuComponentProps {
  menuItems: string[];
  handleItemClick: (item: string) => void;
}

const MenuComponent: React.FC<MenuComponentProps> = ({ menuItems, handleItemClick }) => {
  return (
    <MenuList>
      {menuItems.map((item) => (
        <MenuItem key={item} onClick={() => handleItemClick(item)}>
          {item}
        </MenuItem>
      ))}
    </MenuList>
  );
};

export default MenuComponent;
