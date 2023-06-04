import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import SearchResults from './SearchResults';

interface SearchComponentProps {
  data: Array<any>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [open, setModalOpen] = useState<boolean>(false);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Filter the data based on the search query
    const filteredResults = data.filter((item) => {
      const { location, title } = item;
      return location.toLowerCase().includes(value.toLowerCase()) || title.toLowerCase().includes(value.toLowerCase());
    });
    setSearchResults(filteredResults);
  };

  const handleSearchClick = () => {
    setModalOpen(Boolean(searchResults.length))
  };

  const handleClearClick = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  const onModalClose = () => {
     setModalOpen(false)
  }

  return (
    <div>
      <TextField
        label=""
        value={searchQuery}
        onChange={handleInputChange}
        variant="standard"
        sx={{
            "& .MuiInputBase-root": {
              color: "white",
              "& .MuiInputBase-input::placeholder": {
                color: "white",
              },
              "&:before": {
                borderBottomColor: "white",
              },
              "&:hover:before": {
                borderBottomColor: "white",
              },
              "&.Mui-focused:before": {
                borderBottomColor: "white",
              },
            },
          }}
          
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {searchQuery ? (
                <>
                  <IconButton onClick={handleClearClick} >
                    <ClearIcon sx={{ color: 'white' }}/>
                  </IconButton>
                  <IconButton onClick={handleSearchClick} >
                    <SearchIcon sx={{ color: 'white' }}/>
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={handleSearchClick}>
                  <SearchIcon sx={{ color: 'white' }} />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />

      {open  ? <SearchResults results={searchResults} openModal={open} handleModalClose={onModalClose} />:null}
    </div>
  );
};

export default SearchComponent;
