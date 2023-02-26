import "./userDetails.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Sidebar2 from "../../components/sidebar2/Sidebar2";
import Datatable from "../../components/datatable/Datatable";

function UserDetails(props){
    return (
        <div className="user-details">
      <Sidebar />
      <Sidebar2 />
      <Navbar />
      <div className="user-details-Container">
       <Datatable files={props.files} />
      </div>
    </div>
    )
}
export default UserDetails