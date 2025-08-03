// // export default App;

// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Divider,
//   Paper
// } from '@mui/material';

// import DashboardSelector from "./components/DashboardSelector";
// import QuarterlyRevenueLineChart from "./components/QuarterlyRevenueLineChart";
// import RevenueBridgeChart from "./components/RevenueBridgeWaterfallChart";
// import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
// import RegionRevenueChart from "./components/RegionRevenueBarChart";
// import CustomerConcentrationChart from "./components/CustomerConcentrationChart";

// function App() {
//   const [dashboardName, setDashboardName] = useState('');

//   const renderDashboard = () => {
//     switch (dashboardName) {
//       case "A._Quarterly_Revenue_and_QoQ_growth":
//         return <QuarterlyRevenueLineChart filename={dashboardName} />;
//       case "B._Revenue_Bridge_and_Churned_Analysis":
//         return <RevenueBridgeChart filename={dashboardName} />;
//       case "C._Country_wise_Revenue_Analysis":
//         return <CountryRevenuePieChart filename={dashboardName} />;
//       case "D._Region_wise_Revenue_Analysis":
//         return <RegionRevenueChart filename={dashboardName} />;
//       case "E._Customer_Concentration_Analysis":
//         return <CustomerConcentrationChart filename={dashboardName} />;
//       default:
//         return (
//           <Typography align="center" color="text.secondary" mt={4}>
//             Please select a dashboard from the dropdown above.
//           </Typography>
//         );
//     }
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Business Intelligence Dashboard
//         </Typography>
//         <Divider sx={{ my: 2 }} />
//         <Box display="flex" justifyContent="center">
//           <DashboardSelector onSelect={setDashboardName} />
//         </Box>
//       </Paper>

//       {dashboardName && (
//         <Typography variant="h6" align="center" sx={{ mb: 2 }}>
//           Showing: {dashboardName.replace(/_/g, ' ')}
//         </Typography>
//       )}

//       {renderDashboard()}
//     </Container>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  Paper,
  CircularProgress
} from '@mui/material';

import DashboardSelector from "./components/DashboardSelector";
import QuarterlyRevenueLineChart from "./components/QuarterlyRevenueLineChart";
import RevenueBridgeChart from "./components/RevenueBridgeWaterfallChart";
import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
import RegionRevenueChart from "./components/RegionRevenueBarChart";
import CustomerConcentrationChart from "./components/CustomerConcentrationChart";
import AutoChartRenderer from "./components/AutoChartRenderer"; // 🆕

function App() {
  const [dashboardName, setDashboardName] = useState('');
  const [availableDashboards, setAvailableDashboards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch available filenames from backend (which reads from S3)
    const fetchDashboardList = async () => {
      try {
        const res = await fetch('https://dashboard-backend-1-4ipw.onrender.com/api/json/files');
        const files = await res.json();
        setAvailableDashboards(files);
      } catch (error) {
        console.error("Error loading dashboard list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardList();
  }, []);

  const renderDashboard = () => {
    switch (dashboardName) {
      case "A._Quarterly_Revenue_and_QoQ_growth":
        return <QuarterlyRevenueLineChart filename={dashboardName} />;
      case "B._Revenue_Bridge_and_Churned_Analysis":
        return <RevenueBridgeChart filename={dashboardName} />;
      case "C._Country_wise_Revenue_Analysis":
        return <CountryRevenuePieChart filename={dashboardName} />;
      case "D._Region_wise_Revenue_Analysis":
        return <RegionRevenueChart filename={dashboardName} />;
      case "E._Customer_Concentration_Analysis":
        return <CustomerConcentrationChart filename={dashboardName} />;
      default:
        return dashboardName ? (
          <AutoChartRenderer filename={dashboardName} />
        ) : (
          <Typography align="center" color="text.secondary" mt={4}>
            Please select a dashboard from the dropdown above.
          </Typography>
        );
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Business Intelligence Dashboard
        </Typography>
        <Divider sx={{ my: 2 }} />
        {loading ? (
          <Box display="flex" justifyContent="center" mt={2}>
            <CircularProgress />
          </Box>
        ) : (
          <Box display="flex" justifyContent="center">
            <DashboardSelector
              onSelect={setDashboardName}
              options={availableDashboards}
            />
          </Box>
        )}
      </Paper>

      {dashboardName && (
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Showing: {dashboardName.replace(/_/g, ' ').replace(/\./g, '')}
        </Typography>
      )}

      {renderDashboard()}
    </Container>
  );
}

export default App;





