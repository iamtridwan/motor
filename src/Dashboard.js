import React from 'react'
import Outlet from './components/outlet/Outlet'
import Sidebar from './components/sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div style={dashboardStyle}>
        <Sidebar />
        <Outlet />
    </div>
  )
}

const dashboardStyle = {
    with: "100%",
    backgroundColor: "#FAFAFE",
    fontFamily: "Poppins",
    padding: "10px",
    display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    // position: "relative",
    // height: "fit-content",
}
export default Dashboard