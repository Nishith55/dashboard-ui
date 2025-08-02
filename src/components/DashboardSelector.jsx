// import React from "react";

// const DashboardSelector = ({ selectedFile, onChange }) => {
//   const options = [
//     { label: "Quarterly Revenue", value: "A._Quarterly_Revenue_and_QoQ_growth" },
//     { label: "Revenue Bridge & Churned Analysis", value: "B._Revenue_Bridge_and_Churned_Analysis" },
//     { label: "Country-wise Revenue", value: "C._Country_wise_Revenue_Analysis" },
//     { label: "Region-wise Revenue", value: "D._Region_wise_Revenue_Analysis" },
//     { label: "Customer Concentration", value: "E._Customer_Concentration_Analysis" },
//   ];

//   return (
//     <select
//       value={selectedFile}
//       onChange={(e) => onChange(e.target.value)}
//       className="border p-2 rounded mb-4"
//     >
//       {options.map((opt) => (
//         <option key={opt.value} value={opt.value}>
//           {opt.label}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default DashboardSelector;




// import React from "react";

// const DashboardSelector = ({ selectedFile, onChange }) => {
//   return (
//     <select
//       value={selectedFile}
//       onChange={(e) => onChange(e.target.value)}
//       style={{ padding: "8px", fontSize: "16px", marginBottom: "20px" }}
//     >
//       <option value="A._Quarterly_Revenue_and_QoQ_Growth_per_Customer">Quarterly Revenue</option>
//       <option value="B._Revenue_Bridge_and_Churned_Revenue_Analysis">Revenue Bridge</option>
//       <option value="C._Country_wise_Revenue_Analysis">Country-wise Revenue</option>
//       <option value="D._Region_wise_Revenue_Analysis">Region-wise Revenue</option>
//       <option value="E._Customer_Concentration_Analysis">Customer Concentration</option>
//     </select>
//   );
// };

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
