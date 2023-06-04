import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Button,
  DialogActions,
  ListItemIcon,
  Typography
} from "@mui/material";

import { KingBed, Bathtub } from '@mui/icons-material';
interface SearchResultsProps {
  results: Array<any>;
  openModal: boolean;
  handleModalClose: () => void
}
const SearchResults: React.FC<SearchResultsProps> = ({ results, openModal, handleModalClose }) => {

  return (
    <Dialog
      open={openModal}
      onClose={handleModalClose}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>Search Results</DialogTitle>
      <DialogContent>
        {results.length > 0 ? (
          <List>
            {results.map((result) => (
              <ListItem key={result.id}>
                <ListItemText
                  primary={<a href={`/property/${result.id}`}>{result.title}</a>}
                  secondary={result.location}
                />
                <ListItemIcon>
                  <KingBed />
                  <Typography variant="subtitle2" color="textSecondary">
                    {result.bedrooms}
                  </Typography>
                </ListItemIcon>
                <ListItemIcon>
                  <Bathtub />
                  <Typography variant="subtitle2" color="textSecondary">
                    {result.bathrooms}
                  </Typography>
                </ListItemIcon>
              </ListItem>
              
            ))}
          </List>
        ) : (
          <p>No results found.</p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleModalClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchResults;
