import React, { useEffect, useState } from 'react';
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend
} from 'recharts';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#8dd1e1'];

const CustomerConcentrationChart = ({ filename }) => {
  const [topCustomers, setTopCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dashboard-backend-1-4ipw.onrender.com/api/json/${filename}`);
        // const res = await fetch(`https://dashboard-jsons-file.s3.eu-north-1.amazonaws.com/${filename}.json`);
        const json = await res.json();

        const top = json
          .sort((a, b) => b['Total Revenue'] - a['Total Revenue'])
          .slice(0, 5)
          .map(item => ({
            name: item['Customer Name'],
            value: item['Total Revenue']
          }));

        setTopCustomers(top);
      } catch (err) {
        console.error("Error fetching customer concentration data:", err);
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
          Customer Concentration (Top 5 by Revenue)
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : topCustomers.length > 0 ? (
          <Box height={400}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topCustomers}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {topCustomers.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={50} />
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

export default CustomerConcentrationChart;
