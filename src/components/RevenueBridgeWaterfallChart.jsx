import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
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

const RevenueBridgeChart = ({ filename }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(`http://localhost:8080/api/json/${filename}`);
        const res = await fetch(`https://dashboard-backend-1-4ipw.onrender.com/api/json/${filename}`);

        const json = await res.json();
        const topCustomers = json.slice(0, 20); // limit for performance
        setData(topCustomers);
      } catch (err) {
        console.error('Error fetching revenue bridge data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filename]);

  return (
    <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom align="center">
          Q4 Revenue Breakdown by Customer (Top 20)
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : data.length > 0 ? (
          <Box height={500}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="Customer Name"
                  angle={-45}
                  textAnchor="end"
                  interval={0}
                  height={100}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="New Revenue" stackId="a" fill="#4caf50" />
                <Bar dataKey="Expansion Revenue" stackId="a" fill="#2196f3" />
                <Bar dataKey="Contraction Revenue" stackId="a" fill="#f44336" />
                <Bar dataKey="Churned Revenue" stackId="a" fill="#9e9e9e" />
              </BarChart>
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

export default RevenueBridgeChart;
