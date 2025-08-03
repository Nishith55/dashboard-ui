import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

function DashboardSelector({ value, onSelect, options }) {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <Box width={300}>
      <FormControl fullWidth>
        <InputLabel id="dashboard-select-label">Select Dashboard</InputLabel>
        <Select
          labelId="dashboard-select-label"
          id="dashboard-select"
          value={value}
          onChange={handleChange}
          label="Select Dashboard"
        >
          {options.map((filename) => (
            <MenuItem key={filename} value={filename}>
              {filename.replace(/_/g, ' ').replace(/\./g, '')}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DashboardSelector;
