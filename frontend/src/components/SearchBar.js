import React from "react";
import "../App.css";
function SearchBar({
  searchText,
  onSearchTextChange,
  vehicles,
  selectedVehicle,
  onVehicleChange,
  startDate,
  onStartDateChange,
  endDate,
  onEndDateChange,
  onSearch,
  onClear,
}) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search text"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
      />
      <select
        value={selectedVehicle}
        onChange={(e) => onVehicleChange(e.target.value)}
      >
        <option value="">Select Vehicle</option>
        {vehicles.map((vehicle) => (
          <option key={vehicle.id} value={vehicle.friendly_name}>
            {vehicle.friendly_name}
          </option>
        ))}
      </select>
      <label>
        Date range
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartDateChange(e.target.value)}
        />
      </label>
      <label>
        to
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndDateChange(e.target.value)}
        />
      </label>
      <button onClick={onSearch}>Search</button>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default SearchBar;
