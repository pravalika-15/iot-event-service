// components/AlertList.js
import React from "react";

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
      {alerts.map((alert) => (
        <div key={alert.id} className="Alert">
          <div className="AlertDetails">
            <p>{`${alert.alert_type} • ${formatTimestamp(alert.timestamp)}`}</p>
            <p>{`Driver: ${alert.driver_friendly_name} / ${alert.vehicle_friendly_name}`}</p>
          </div>
          <div className="ActionButtons">
            {!alert.markedFalseAlarm ? (
              <div className="ActionButtons">
                <button onClick={() => onMarkFalseAlarm(alert.id)}>
                  Mark As False Alarm
                </button>
              </div>
            ) : (
              <div className="MarkedFalseAlarm">
                <p>Marked as False Alarm</p>
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AlertList;
