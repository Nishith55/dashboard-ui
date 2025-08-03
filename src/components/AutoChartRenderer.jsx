import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1'];

const AutoChartRenderer = ({ filename }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://dashboard-backend-1-4ipw.onrender.com/api/json/${filename}`);
        const json = await res.json();

        if (Array.isArray(json)) {
          setData(json);
        } else {
          console.warn("JSON is not an array. Cannot visualize.");
        }
      } catch (err) {
        console.error("Error fetching JSON:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filename]);

  const inferNumericFields = () => {
    if (!data.length) return [];

    const sample = data[0];
    return Object.keys(sample).filter(key => typeof sample[key] === 'number');
  };

  const inferCategoryField = () => {
    if (!data.length) return null;

    const sample = data[0];
    return Object.keys(sample).find(key => typeof sample[key] === 'string' || typeof sample[key] === 'number');
  };

  const renderAutoChart = () => {
    const numericFields = inferNumericFields();
    const categoryField = inferCategoryField();

    if (numericFields.length > 0 && categoryField) {
      return (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey={categoryField} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={numericFields[0]} fill="#4CAF50" />
          </BarChart>
        </ResponsiveContainer>
      );
    }

    return (
      <Typography align="center" color="text.secondary">
        No suitable chart could be generated.
      </Typography>
    );
  };

  const renderTable = () => (
    <Box mt={4}>
      <Typography variant="subtitle1" gutterBottom>Data Preview</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            {Object.keys(data[0]).map((key) => (
              <TableCell key={key}>{key}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(0, 10).map((row, idx) => (
            <TableRow key={idx}>
              {Object.keys(row).map((key) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );

  return (
    <Card sx={{ marginBottom: 4, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" align="center" gutterBottom>
          Auto-Generated Chart for: {filename.replace(/_/g, ' ')}
        </Typography>

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height={300}>
            <CircularProgress />
          </Box>
        ) : data.length > 0 ? (
          <>
            {renderAutoChart()}
            {renderTable()}
          </>
        ) : (
          <Typography align="center" color="text.secondary">
            No data available.
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AutoChartRenderer;
