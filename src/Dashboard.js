import React, { useState } from 'react'
import Outlet from './components/outlet/Outlet'
import Sidebar from './components/sidebar/Sidebar'
import "./dasnboard.css"

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div 
    className="dashboard" 
    >
        <Sidebar show={showSidebar} hideSidebar={() => setShowSidebar(!showSidebar)} />
        <Outlet revealSidebar={() => setShowSidebar(!showSidebar)}/>
    </div>
  )
}

// const dashboardStyle = {
//     with: "100%",
//     backgroundColor: "#FAFAFE",
//     fontFamily: "Poppins",
//     padding: "10px",
//     display: "flex",
//     // alignItems: "center",
//     justifyContent: "space-between",
//     margin: 0,
//     // position: "relative",
//     // height: "fit-content",
// }
export default Dashboard