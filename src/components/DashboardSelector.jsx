// export default DashboardSelector;
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box
} from '@mui/material';

const dashboards = [
  {
    id: "A._Quarterly_Revenue_and_QoQ_growth",
    label: "Quarterly Revenue & QoQ Growth"
  },
  {
    id: "B._Revenue_Bridge_and_Churned_Analysis",
    label: "Revenue Bridge & Churned Analysis"
  },
  {
    id: "C._Country_wise_Revenue_Analysis",
    label: "Country-wise Revenue"
  },
  {
    id: "D._Region_wise_Revenue_Analysis",
    label: "Region-wise Revenue"
  },
  {
    id: "E._Customer_Concentration_Analysis",
    label: "Customer Concentration"
  }
];

function DashboardSelector({ onSelect }) {
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
          defaultValue=""
          onChange={handleChange}
        >
          {dashboards.map(({ id, label }) => (
            <MenuItem key={id} value={id}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DashboardSelector;
