import React from "react";
import avatar from "../../assets/Avatar.svg"
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <p>Dashboard</p>
      <div className='avatar'>
        <img src={avatar} alt="profile photo" />
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.41449 0.607312C1.17559 0.362437 0.778628 0.353047 0.527862 0.58634C0.277097 0.819633 0.267482 1.20726 0.506387 1.45214C0.506387 1.45214 4.25024 5.23095 4.26111 5.24125C4.51982 5.48275 4.93003 5.47371 5.17733 5.22108L8.90951 1.45217C9.14884 1.20769 9.13989 0.820043 8.88952 0.58634C8.63916 0.352638 8.24218 0.361379 8.00286 0.605864L5.06086 3.52631C4.86593 3.71981 4.55141 3.71985 4.35644 3.52639L1.41449 0.607312Z" fill="#171F46"/>
        </svg>
      </div>
    </div>
  )
}

export default Topbar