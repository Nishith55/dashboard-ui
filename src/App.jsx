// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// import React from "react";
// import RevenueTable from "./components/RevenueTable";

// function App() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
//       <RevenueTable />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import RevenueTable from "./components/RevenueTable";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("D._Region_wise_Revenue_Analysis");

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />
//       <RevenueTable filename={selectedFile} />
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import RevenueTable from "./components/RevenueTable";
// import RevenueBarChart from "./components/RevenueBarChart";
// // Later import more like:
// // import ChurnChart from "./components/ChurnChart";
// // import RevenueBridgeChart from "./components/RevenueBridgeChart";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("D._Region_wise_Revenue_Analysis");

//   const renderDashboard = () => {
//     switch (selectedFile) {
//       case "D._Region_wise_Revenue_Analysis":
//         return <RevenueTable filename={selectedFile} />;

//       case "A._Quarterly_Revenue_and_QoQ_growth":
//         return <RevenueBarChart filename={selectedFile} />;

//       // Add more cases as you build new charts
//       // case "B._Revenue_Bridge":
//       //   return <RevenueBridgeChart filename={selectedFile} />;
      
//       // default fallback
//       default:
//         return <p className="text-gray-500 mt-4">Dashboard not yet implemented for this dataset.</p>;
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />
//       {renderDashboard()}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import RevenueBarChart from "./components/RevenueBarChart";
// import RevenueBridgeChart from "./components/RevenueBridgeChart";
// import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
// import CustomerConcentrationChart from "./components/CustomerConcentrationChart";
// import RevenueTable from "./components/RevenueTable";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("A._Quarterly_Revenue_and_QoQ_growth");

//   const renderChart = () => {
//     switch (selectedFile) {
//       case "A._Quarterly_Revenue_and_QoQ_growth":
//         return <RevenueBarChart filename={selectedFile} />;
//       case "B._Revenue_Bridge_and_Churned_Analysis":
//         return <RevenueBridgeChart filename={selectedFile} />;
//       case "C._Country_wise_Revenue_Analysis":
//         return <CountryRevenuePieChart filename={selectedFile} />;
//       case "E._Customer_Concentration_Analysis":
//         return <CustomerConcentrationChart filename={selectedFile} />;
//       default:
//         return <RevenueTable filename={selectedFile} />;
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />
//       {renderChart()}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import CountryRevenuePieChart from "./components/CountryRevenuePieChart";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("C._Country_wise_Revenue_Analysis");

//   return (
//     <div className="p-4 text-white bg-black min-h-screen">
      
//       <h1 className="text-4xl font-bold text-blue-500 mb-4">Dashboard</h1>

//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />
//       {selectedFile === "C._Country_wise_Revenue_Analysis" && (
//         <CountryRevenuePieChart filename={selectedFile} />
//       )}
//       {/* You can add more conditional rendering for other dashboards later */}
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import QuarterlyRevenueChart from "./components/QuarterlyRevenueChart";
// import RevenueBridgeChart from "./components/RevenueBridgeChart";
// import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
// import RegionRevenueBarChart from "./components/RegionRevenueBarChart";
// import CustomerConcentrationChart from "./components/CustomerConcentrationChart";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("A._Quarterly_Revenue_and_QoQ_Growth_per_Customer");

//   return (
//     <div style={{ padding: "20px", backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
//       <h1 style={{ fontSize: "32px", fontWeight: "bold", color: "#4da6ff", marginBottom: "20px" }}>
//         Dashboard
//       </h1>

//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />

//       {selectedFile === "A._Quarterly_Revenue_and_QoQ_Growth_per_Customer" && (
//         <QuarterlyRevenueChart filename={selectedFile} />
//       )}
//       {selectedFile === "B._Revenue_Bridge_and_Churned_Revenue_Analysis" && (
//         <RevenueBridgeChart filename={selectedFile} />
//       )}
//       {selectedFile === "C._Country_wise_Revenue_Analysis" && (
//         <CountryRevenuePieChart filename={selectedFile} />
//       )}
//       {selectedFile === "D._Region_wise_Revenue_Analysis" && (
//         <RegionRevenueBarChart filename={selectedFile} />
//       )}
//       {selectedFile === "E._Customer_Concentration_Analysis" && (
//         <CustomerConcentrationChart filename={selectedFile} />
//       )}
//     </div>
//   );
// }

// export default App;


// src/App.jsx
// import React, { useState } from "react";
// import DashboardSelector from "./components/DashboardSelector";
// import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
// import RegionRevenueBarChart from "./components/RegionRevenueBarChart";
// import CustomerConcentrationTable from "./components/CustomerConcentrationTable";
// import QuarterlyRevenueLineChart from "./components/QuarterlyRevenueLineChart";
// import RevenueBridgeWaterfallChart from "./components/RevenueBridgeWaterfallChart";

// function App() {
//   const [selectedFile, setSelectedFile] = useState("C._Country_wise_Revenue_Analysis");

//   return (
//     <div style={{ padding: "1rem", backgroundColor: "#000", color: "#fff", minHeight: "100vh" }}>
//       <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#3b82f6", marginBottom: "1rem" }}>Dashboard</h1>

//       <DashboardSelector selectedFile={selectedFile} onChange={setSelectedFile} />

//       {selectedFile === "C._Country_wise_Revenue_Analysis" && (
//         <CountryRevenuePieChart filename={selectedFile} />
//       )}
//       {selectedFile === "D._Region_wise_Revenue_Analysis" && (
//         <RegionRevenueBarChart filename={selectedFile} />
//       )}
//       {selectedFile === "E._Customer_Concentration_Analysis" && (
//         <CustomerConcentrationTable filename={selectedFile} />
//       )}
//       {selectedFile === "A._Quarterly_Revenue_Per_Customer" && (
//         <QuarterlyRevenueLineChart filename={selectedFile} />
//       )}
//       {selectedFile === "B._Revenue_Bridge_and_Churned_Analysis" && (
//         <RevenueBridgeWaterfallChart filename={selectedFile} />
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// // import DashboardSelector from './DashboardSelector';
// import DashboardSelector from "./components/DashboardSelector";

// function App() {
//   const [dashboardName, setDashboardName] = useState('');
//   const [data, setData] = useState(null);

//   const handleSelect = async (selectedDashboard) => {
//     setDashboardName(selectedDashboard);
//     try {
//       const response = await fetch(`http://localhost:8080/api/data/${selectedDashboard}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       setData(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Business Dashboard</h1>
//       <DashboardSelector onSelect={handleSelect} />

//       {dashboardName && <h2>Showing data for: {dashboardName}</h2>}
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : dashboardName ? (
//         <p>Loading or failed to load data.</p>
//       ) : (
//         <p>Please select a dashboard</p>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Divider,
  Paper
} from '@mui/material';

import DashboardSelector from "./components/DashboardSelector";
import QuarterlyRevenueLineChart from "./components/QuarterlyRevenueLineChart";
import RevenueBridgeChart from "./components/RevenueBridgeWaterfallChart";
import CountryRevenuePieChart from "./components/CountryRevenuePieChart";
import RegionRevenueChart from "./components/RegionRevenueBarChart";
import CustomerConcentrationChart from "./components/CustomerConcentrationChart";

function App() {
  const [dashboardName, setDashboardName] = useState('');

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
        return (
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
        <Box display="flex" justifyContent="center">
          <DashboardSelector onSelect={setDashboardName} />
        </Box>
      </Paper>

      {dashboardName && (
        <Typography variant="h6" align="center" sx={{ mb: 2 }}>
          Showing: {dashboardName.replace(/_/g, ' ')}
        </Typography>
      )}

      {renderDashboard()}
    </Container>
  );
}

export default App;






