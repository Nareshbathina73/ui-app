import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface SortableDropdownProps {
  getData: () => [];
  onSorted: (data: any) => void;
}

const SortableDropdown: React.FC<SortableDropdownProps> = ({
  getData,
  onSorted,
}) => {
  const [sortedData, setSortedData] = useState<any>(getData());
  const [field, setField] = useState("");

  const handleSortChange = (event: any) => {
    const value = event.target.value;
    setField(value);
    const sorted = [...sortedData];

    sorted.sort((a, b) => {
      const valueA =
        typeof a[value] === "string" ? a[value].toLowerCase() : a[value];
      const valueB =
        typeof b[value] === "string" ? b[value].toLowerCase() : b[value];

      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });

    if (onSorted) onSorted(sorted);

    setSortedData(sorted);
  };

  return (
    <FormControl variant="outlined" style={{ minWidth: 200 }}>
      <InputLabel>Sort by...</InputLabel>
      <Select value={field} onChange={handleSortChange} label="Sort by..." >
        <MenuItem value="title">Title</MenuItem>
        <MenuItem value="location">Location</MenuItem>
        <MenuItem value="bedrooms">Bedrooms</MenuItem>
        <MenuItem value="bathrooms">Bathrooms</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortableDropdown;
