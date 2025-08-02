// // src/components/CountryRevenuePieChart.jsx
// import React, { useEffect, useState } from "react";
// import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

// const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8", "#A28CD1"];

// function CountryRevenuePieChart({ filename }) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // fetch(`http://localhost:8080/api/dashboard/${filename}`)
//     fetch(`http://localhost:8080/api/json/${filename}.json`)
//       .then((res) => res.json())
//       .then((json) => setData(json))
//       .catch((err) => console.error("Error fetching CountryRevenuePieChart:", err));
//   }, [filename]);

//   return (
//     <div className="my-8">
//       <h2 className="text-xl font-semibold mb-4">Country-wise Revenue Analysis</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <PieChart>
//           <Pie
//             data={data}
//             dataKey="Yearly Revenue"
//             nameKey="Country"
//             cx="50%"
//             cy="50%"
//             outerRadius={140}
//             label
//           >
//             {data.map((_, index) => (
//               <Cell key={index} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//           <Tooltip />
//           <Legend />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

// export default CountryRevenuePieChart;


import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';

// 20 distinct colors
const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
  '#A28BD4', '#FF6384', '#36A2EB', '#FFCE56',
  '#00ACC1', '#4CAF50', '#E91E63', '#9C27B0',
  '#795548', '#607D8B', '#03A9F4', '#CDDC39',
  '#FFC107', '#FF5722', '#8BC34A', '#673AB7'
];

const CountryRevenuePieChart = ({ filename }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8080/api/json/${filename}`);
        const jsonData = await res.json();

        const parsed = jsonData.map(item => ({
          name: item.Country,
          value: item["Yearly Revenue"]
        }));

        setData(parsed);
      } catch (err) {
        console.error("Error fetching or parsing data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filename]);

  return (
    <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Country-wise Revenue Distribution
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : data.length > 0 ? (
          <Box height={400}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={140}
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend layout="horizontal" verticalAlign="bottom" align="center" />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        ) : (
          <Typography align="center" color="text.secondary">
            No data available.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default CountryRevenuePieChart;
