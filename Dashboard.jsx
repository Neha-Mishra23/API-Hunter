import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const token = location.state?.token || "No token available";

  return (
    <div  style={{ marginLeft : '250%' ,  paddingBottom : '90px'}}>
      <h1>Dashboard</h1>
      <h3>Token: {token}</h3>
    </div>
  );
};

export default Dashboard;