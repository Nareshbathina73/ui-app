import React, {useEffect, useState} from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  MenuItem,
  FormControl,
  Select,
  FilledInput,
} from "@mui/material";
import {
  Business as BuildingIcon,
} from "@mui/icons-material";
import SearchComponent from "../search/SearchComponent";
const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make the API call only once at the load of the application
    // Fetch the data and store it in the data state
    const fetchData = async () => {
      try {
        const response = await fetch(`api/data?page=all`);
        const responseData = await response.json();
        setData(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Icon on the left */}
        <IconButton edge="start" sx={{ color: 'white' }} aria-label="menu">
          <BuildingIcon />
        </IconButton>

        {/* Dropdown menus in the center */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", color: 'white', }}>
          <FormControl>
            <Select value="" displayEmpty
            sx={{
              color: 'white',
              '& .MuiSelect-icon': {
                color: 'white',
                marginTop: '8px'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
            inputProps={{
              sx: { color: 'white' },
            }}
            input={<FilledInput disableUnderline />}
            >
              <MenuItem value="" disabled>
                Locations
              </MenuItem>
              <MenuItem value="item-1">Australia</MenuItem>
              <MenuItem value="item-1">North AMerica</MenuItem>
              {/* Add your menu items here */}
            </Select>
          </FormControl>

          <FormControl>
          <Select value="" displayEmpty
            sx={{
              color: 'white',
              '& .MuiSelect-icon': {
                color: 'white',
                marginTop: '8px'
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
            }}
            inputProps={{
              sx: { color: 'white' },
            }}
            input={<FilledInput disableUnderline />}
            >
              <MenuItem value="" disabled>
                Bookings
              </MenuItem>
              <MenuItem value="item-1">Availability</MenuItem>
              <MenuItem value="item-1">Booked</MenuItem>
              {/* Add your menu items here */}
            </Select>
          </FormControl>
        </Box>

        {/* Search box on the right corner */}
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'white', }}>
          <SearchComponent data={data}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
