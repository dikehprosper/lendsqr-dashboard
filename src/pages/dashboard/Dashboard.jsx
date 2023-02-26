import React from "react";
import "./dashboard.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Widgets from "./../../components/widgets/widgets";
import Header from './../../components/header/Header';
import TableList from "../../components/tablelist/TableList";
import Sidebar2 from "../../components/sidebar2/Sidebar2";

function Dashboard(props) {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <Sidebar2 />
      <div className="dashboardContainer">
        <Header />
        <Widgets />
        <TableList files={props.files} />
      </div>
    </div>
  );
}
export default Dashboard;
