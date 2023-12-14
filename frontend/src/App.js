// App.js
import React, { useState, useEffect } from "react";
import AlertList from "./components/AlertList";
import SearchBar from "./components/SearchBar";
import api from "./api";
import "./App.css";

function App() {
  const [alerts, setAlerts] = useState([]);
  const [filteredAlerts, setFilteredAlerts] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    // Fetch alerts and vehicles from the backend
    api.getAlerts().then((data) => {
      setAlerts(data);
      setFilteredAlerts(data);
    });

    api.getVehicles().then((data) => {
      setVehicles(data);
    });
  }, []);
  const handleSearch = () => {
    let filtered = alerts;

    console.log("Search Text:", searchText);
    console.log("Selected Vehicle:", selectedVehicle);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    if (searchText) {
      filtered = filtered.filter((alert) =>
        Object.values(alert).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }

    if (selectedVehicle) {
      filtered = filtered.filter(
        (alert) =>
          alert.vehicle_friendly_name.toLowerCase() ===
          selectedVehicle.toLowerCase()
      );
    }

    if (startDate && endDate) {
      filtered = filtered.filter(
        (alert) =>
          alert.timestamp >= new Date(startDate).toISOString() &&
          alert.timestamp <= new Date(endDate).toISOString()
      );
    }

    setFilteredAlerts(filtered);
  };

  const handleClear = () => {
    setSearchText("");
    setSelectedVehicle("");
    setStartDate("");
    setEndDate("");
    setFilteredAlerts(alerts);
  };

  const handleMarkFalseAlarm = (alertId) => {
    // API call to mark alert as false alarm
    api.markFalseAlarm(alertId).then(() => {
      // Update the local state after successful API call
      setFilteredAlerts((prevAlerts) =>
        prevAlerts.map((alert) =>
          alert.id === alertId ? { ...alert, markedFalseAlarm: true } : alert
        )
      );
    });
  };

  return (
    <div>
      <SearchBar
        searchText={searchText}
        onSearchTextChange={(text) => setSearchText(text)}
        vehicles={vehicles}
        selectedVehicle={selectedVehicle}
        onVehicleChange={(vehicle) => setSelectedVehicle(vehicle)}
        startDate={startDate}
        onStartDateChange={(date) => setStartDate(date)}
        endDate={endDate}
        onEndDateChange={(date) => setEndDate(date)}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <AlertList
        alerts={filteredAlerts}
        onMarkFalseAlarm={handleMarkFalseAlarm}
      />
    </div>
  );
}

export default App;
