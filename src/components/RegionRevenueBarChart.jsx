import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';

const RegionRevenueChart = ({ filename }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dashboard-backend-1-4ipw.onrender.com/api/json/${filename}`);

        const json = await res.json();

        const cleaned = json.map(item => ({
          Region: item.Region,
          'Yearly Revenue': item["Yearly Revenue"] || 0
        }));

        setData(cleaned);
      } catch (err) {
        console.error("Error fetching region-wise revenue data:", err);
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
          Region-wise Revenue (Yearly)
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : data.length > 0 ? (
          <Box height={350}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Region" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Yearly Revenue" fill="#4CAF50" />
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

export default RegionRevenueChart;
