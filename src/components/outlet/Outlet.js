import React, { useState } from "react";
import Topbar from "../topbar/Topbar";
import "./outlet.css"
import { activityData } from "../../tableData";

const Outlet = ({revealSidebar}) => {
  const [end, setEnd] = useState(8);
  const handleShowMore = () => {
    if(end !== activityData.length){
      setEnd(activityData.length);
    } else{
      setEnd(8);
    }
  }
  return (
    <div className="wrapper">
         <span id="hamburger" onClick={revealSidebar}>
          <svg width="35" height="35" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 16.6667V11.6667" stroke="#5D6C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 16.6666V8.33331" stroke="#5D6C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10 16.6666V3.33331" stroke="#5D6C76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
        <Topbar />
        <section className="overview">
          <h3>Overview</h3>
          <div className="container">
            <div className="top first">
              <div>
                <h1>228</h1>
                <span>
                  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.83421 0.999428C6.15083 0.524138 6.84917 0.524137 7.16579 0.999427L12.1668 8.50647C12.521 9.03813 12.1398 9.75 11.501 9.75H1.49901C0.860176 9.75 0.479039 9.03813 0.833218 8.50647L5.83421 0.999428Z" fill="#21BA30"/>
                  </svg>
                  <small>+3</small>
                </span>
              </div>
              <h2>Autocentres</h2>
            </div>
            <div className="top sec">
                <h1>44</h1>
                <h2>Forms Created</h2>
            </div>
            <div className="top last">
                <h1>QWG3O32K</h1>
                <h2>Organization Key</h2>
            </div>
          </div>
        </section>
        <section className="action">
          <h3>Key actions</h3>
          <div className="action-wrapper">
            <div className="container-form">
              <div className="left">
                <div className="form-svg">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7273 5.45455H14.9091C14.6086 5.45455 14.3637 5.20964 14.3637 4.90909V2.72727C14.3637 2.42618 14.1193 2.18182 13.8182 2.18182C13.5171 2.18182 13.2728 2.42618 13.2728 2.72727V4.90909C13.2728 5.81127 14.007 6.54545 14.9091 6.54545H18.1819V22.3636C18.1819 22.6642 17.937 22.9091 17.6364 22.9091H2.36369C2.06314 22.9091 1.81823 22.6642 1.81823 22.3636V1.63636C1.81823 1.33582 2.06314 1.09091 2.36369 1.09091H14.1586L18.3679 4.77382C18.5953 4.97291 18.9395 4.94945 19.1375 4.72255C19.3361 4.49564 19.3131 4.15145 19.0862 3.95291L14.7226 0.134727C14.6233 0.048 14.4957 0 14.3637 0H2.36369C1.46151 0 0.727325 0.734182 0.727325 1.63636V22.3636C0.727325 23.2658 1.46151 24 2.36369 24H17.6364C18.5386 24 19.2728 23.2658 19.2728 22.3636V6C19.2728 5.69891 19.0284 5.45455 18.7273 5.45455Z" fill="black"/>
                  <path d="M15.4545 17.4545C15.4545 17.1534 15.2102 16.9091 14.9091 16.9091H4.54545C4.24436 16.9091 4 17.1534 4 17.4545C4 17.7556 4.24436 18 4.54545 18H14.9091C15.2102 18 15.4545 17.7556 15.4545 17.4545Z" fill="black"/>
                  <path d="M4.54545 9.27261H10C10.3011 9.27261 10.5455 9.02825 10.5455 8.72716C10.5455 8.42607 10.3011 8.1817 10 8.1817H4.54545C4.24436 8.1817 4 8.42607 4 8.72716C4 9.02825 4.24436 9.27261 4.54545 9.27261Z" fill="black"/>
                  <path d="M15.4547 10.3636H8.90925C8.60816 10.3636 8.3638 10.608 8.3638 10.9091C8.3638 11.2102 8.60816 11.4546 8.90925 11.4546H15.4547C15.7558 11.4546 16.0002 11.2102 16.0002 10.9091C16.0002 10.608 15.7558 10.3636 15.4547 10.3636Z" fill="black"/>
                  <path d="M15.4547 8.1817H12.1819C11.8808 8.1817 11.6365 8.42607 11.6365 8.72716C11.6365 9.02825 11.8808 9.27261 12.1819 9.27261H15.4547C15.7557 9.27261 16.0001 9.02825 16.0001 8.72716C16.0001 8.42607 15.7557 8.1817 15.4547 8.1817Z" fill="black"/>
                  <path d="M4.54545 13.6365H9.45455C9.75564 13.6365 10 13.3921 10 13.091C10 12.79 9.75564 12.5456 9.45455 12.5456H4.54545C4.24436 12.5456 4 12.79 4 13.091C4 13.3921 4.24436 13.6365 4.54545 13.6365Z" fill="black"/>
                  <path d="M4.54545 15.8182H6.72727C7.02836 15.8182 7.27273 15.5738 7.27273 15.2727C7.27273 14.9717 7.02836 14.7273 6.72727 14.7273H4.54545C4.24436 14.7273 4 14.9717 4 15.2727C4 15.5738 4.24436 15.8182 4.54545 15.8182Z" fill="black"/>
                  <path d="M4.54545 11.4546H6.72727C7.02836 11.4546 7.27273 11.2102 7.27273 10.9091C7.27273 10.608 7.02836 10.3636 6.72727 10.3636H4.54545C4.24436 10.3636 4 10.608 4 10.9091C4 11.2102 4.24436 11.4546 4.54545 11.4546Z" fill="black"/>
                  <path d="M15.9999 13.091C15.9999 12.79 15.7556 12.5456 15.4545 12.5456H11.6363C11.3352 12.5456 11.0909 12.79 11.0909 13.091C11.0909 13.3921 11.3352 13.6365 11.6363 13.6365H15.4545C15.7556 13.6365 15.9999 13.3921 15.9999 13.091Z" fill="black"/>
                  <path d="M8.3638 15.2727C8.3638 15.5738 8.60816 15.8182 8.90925 15.8182H13.2729C13.574 15.8182 13.8183 15.5738 13.8183 15.2727C13.8183 14.9717 13.574 14.7273 13.2729 14.7273H8.90925C8.60816 14.7273 8.3638 14.9717 8.3638 15.2727Z" fill="black"/>
                  <path d="M4.54545 19.0909C4.24436 19.0909 4 19.3353 4 19.6364C4 19.9375 4.24436 20.1819 4.54545 20.1819H10C10.3011 20.1819 10.5455 19.9375 10.5455 19.6364C10.5455 19.3353 10.3011 19.0909 10 19.0909H4.54545Z" fill="black"/>
                  </svg>
                </div>
                <div className="content">
                  <p>Create new</p>
                  <h3>Form</h3>
                </div>
              </div>
              <div className="right">
                <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464467C14.9763 0.269205 14.6597 0.269205 14.4645 0.464467C14.2692 0.65973 14.2692 0.976312 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53554C14.6597 7.7308 14.9763 7.7308 15.1716 7.53554L18.3536 4.35355ZM-4.37114e-08 4.5L18 4.5L18 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#161919"/>
                </svg>
              </div>
            </div>
            <div className="center-wrapper">
                <div className="left">
                  <div className="center-svg">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.4 17.8H6.49065C6.43701 18.1952 6.4 18.5943 6.4 19V21C6.4 21.2209 6.57891 21.4 6.8 21.4H23.6C23.8211 21.4 24 21.2209 24 21V19C24 15.3823 21.8285 12.1909 18.5286 10.8506C19.4339 9.97705 20 8.75432 20 7.39998C20 4.7533 17.8469 2.59998 15.2 2.59998C12.5531 2.59998 10.4 4.7533 10.4 7.39998C10.4 8.75615 10.9677 9.98027 11.8751 10.8541C10.7963 11.2959 9.80371 11.9504 8.97734 12.7771C7.79792 13.9563 7.00344 15.4142 6.6363 17H0.8V15C0.8 13.1863 1.50703 11.4783 2.78984 10.1916C3.46597 9.51912 4.28562 8.99748 5.1645 8.6602C5.88682 9.14304 6.7231 9.39997 7.6 9.39997C8.26562 9.39997 8.90274 9.25466 9.49453 8.96794C9.69297 8.87166 9.77617 8.6324 9.68008 8.43357C9.5836 8.23474 9.34414 8.15271 9.14532 8.24802C8.66367 8.48162 8.14375 8.59998 7.6 8.59998C6.81875 8.59998 6.07578 8.35369 5.45078 7.88689C4.54219 7.21228 4 6.13298 4 4.99998C4 3.01502 5.61484 1.39998 7.6 1.39998C8.89688 1.39998 10.0984 2.10349 10.7352 3.23611C10.8434 3.42869 11.0871 3.49724 11.2801 3.38865C11.4727 3.28025 11.541 3.0365 11.4328 2.84392C10.6539 1.45974 9.18555 0.599976 7.6 0.599976C5.17383 0.599976 3.2 2.5738 3.2 4.99998C3.2 6.15723 3.66775 7.2644 4.46736 8.07944C3.64099 8.45442 2.87454 8.97939 2.22461 9.62556C0.789844 11.0644 0 12.973 0 15V17.4C0 17.6209 0.178908 17.8 0.4 17.8ZM11.2 7.39998C11.2 5.19431 12.9945 3.39998 15.2 3.39998C17.4055 3.39998 19.2 5.19431 19.2 7.39998C19.2 9.60564 17.4055 11.4 15.2 11.4C12.9945 11.4 11.2 9.60564 11.2 7.39998ZM9.54297 13.3427C10.4031 12.4825 11.46 11.8268 12.6068 11.433C13.3556 11.9162 14.2445 12.2 15.2 12.2C16.1548 12.2 17.0432 11.9165 17.7916 11.434C21.0326 12.5402 23.2 15.5552 23.2 19V20.6H7.2V19C7.2 16.8627 8.03203 14.8535 9.54297 13.3427Z" fill="black"/>
                    </svg>
                  </div>
                  <div className="content">
                    <p>Create new</p>
                    <h3>Autocenter</h3>
                  </div>
                </div>
                <div className="right">
                  <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464467C14.9763 0.269205 14.6597 0.269205 14.4645 0.464467C14.2692 0.65973 14.2692 0.976312 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53554C14.6597 7.7308 14.9763 7.7308 15.1716 7.53554L18.3536 4.35355ZM-4.37114e-08 4.5L18 4.5L18 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#161919"/>
                  </svg>
                </div>
            </div>
            <div className="dispatch-wrapper">
                <div className="left">
                  <div className="dispatch-svg">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5 3V0H2.5V21H5.5V24H15C16.7239 24 18.3772 23.3152 19.5962 22.0962C20.8152 20.8772 21.5 19.2239 21.5 17.5V3H18.5ZM3.5 20V1H17.5V3H5.5V20H3.5ZM20.5 17.5C20.5 18.9587 19.9205 20.3576 18.8891 21.3891C17.8576 22.4205 16.4587 23 15 23H6.5V4H20.5V17.5Z" fill="black"/>
                    <path d="M17 9H10V10H17V9Z" fill="black"/>
                    <path d="M17 13H10V14H17V13Z" fill="black"/>
                    <path d="M15 17H10V18H15V17Z" fill="black"/>
                    </svg>
                  </div>
                  <div className="content">
                    <p>Create new</p>
                    <h3>Dispatch</h3>
                  </div>
                </div>
                <div className="right">
                  <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3536 4.35355C18.5488 4.15829 18.5488 3.84171 18.3536 3.64645L15.1716 0.464467C14.9763 0.269205 14.6597 0.269205 14.4645 0.464467C14.2692 0.65973 14.2692 0.976312 14.4645 1.17157L17.2929 4L14.4645 6.82843C14.2692 7.02369 14.2692 7.34027 14.4645 7.53554C14.6597 7.7308 14.9763 7.7308 15.1716 7.53554L18.3536 4.35355ZM-4.37114e-08 4.5L18 4.5L18 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#161919"/>
                  </svg>
                </div>
            </div>
          </div>
        </section>
        <section className="activity">
          <h3>Activity log</h3>
          <table width="100%">
            <thead>
              <tr>
              <th>User</th>
              <th>Event</th>
              <th>Date/Time</th>
              </tr>
            </thead>
            <tbody>
            {
              activityData.slice(0, end).map((data, idx) => (
                <tr key={idx}>
                  <td>
                    <span>
                      SC
                    </span>
                    <p>{data.user}</p>
                  </td>
                  <td className="event">{data.event}</td>
                  <td>{data.date}</td>
                </tr>
              ))
            }
            </tbody>
          </table>
          <button onClick={handleShowMore}>
            {end === activityData.length ? "See less activity" : "View more activity"}
          </button>
        </section>
    </div>
  )
}

export default Outlet