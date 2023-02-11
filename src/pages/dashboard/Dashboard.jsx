import React from "react";
import "./dashboard.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Widgets from "./../../components/widgets/widgets";
import Header from './../../components/header/Header';
import Table from "../../components/tablelist/TableList";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <Navbar />
      <div className="dashboardContainer">
        <Header />
        <Widgets />
        <Table />
      </div>
    </div>
  );
}
export default Dashboard;
