// components/AlertList.js
import React from "react";
import "../App.css";

function formatTimestamp(timestamp) {
  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTimestamp = new Date(timestamp).toLocaleString(
    "en-US",
    options
  );
  return formattedTimestamp;
}

function AlertList({ alerts, onMarkFalseAlarm }) {
  return (
    <div>
      <h2>Alerts</h2>
      <hr />
      {alerts.map((alert) => (
        <div key={alert.id}>
          <p>{`Type: ${alert.alert_type}`}</p>
          <p>{`Driver: ${alert.driver_friendly_name}`}</p>
          <p>{`Vehicle: ${alert.vehicle_friendly_name}`}</p>
          {/* <p>{`Timestamp: ${alert.timestamp}`}</p> */}
          <p>{`Timestamp: ${formatTimestamp(alert.timestamp)}`}</p>
          <button onClick={() => onMarkFalseAlarm(alert.id)}>
            Mark as False Alarm
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AlertList;
