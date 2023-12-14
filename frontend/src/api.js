// api.js
const mockData = {
  alerts: [
    {
      id: "6049dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Unsafe driving",
      vehicle_id: "cc70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Ramesh",
      vehicle_friendly_name: "KA12A3456",
      timestamp: "2023-03-01T04:25:45.424Z",
    },
    {
      id: "5149dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Distracted driver",
      vehicle_id: "dd70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Suresh",
      vehicle_friendly_name: "MH12A3456",
      timestamp: "2023-03-01T04:24:45.424Z",
    },
    {
      id: "6249dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Speeding",
      vehicle_id: "ee70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Priya",
      vehicle_friendly_name: "TN34B5678",
      timestamp: "2023-03-01T05:15:30.524Z",
    },
    {
      id: "7349dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Lane departure",
      vehicle_id: "ff70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Anand",
      vehicle_friendly_name: "KL56C7890",
      timestamp: "2023-03-02T08:45:22.624Z",
    },
    {
      id: "8449dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Unsafe driving",
      vehicle_id: "gg70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Neha",
      vehicle_friendly_name: "KA78D1234",
      timestamp: "2023-03-03T12:30:10.724Z",
    },
    {
      id: "9549dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Distracted driver",
      vehicle_id: "hh70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Vikram",
      vehicle_friendly_name: "MH34E5678",
      timestamp: "2023-03-04T14:20:55.824Z",
    },
    {
      id: "a549dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Speeding",
      vehicle_id: "ii70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Asha",
      vehicle_friendly_name: "GJ12F7890",
      timestamp: "2023-03-05T16:10:40.924Z",
    },
    {
      id: "b549dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Lane departure",
      vehicle_id: "jj70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Prakash",
      vehicle_friendly_name: "UP23G1234",
      timestamp: "2023-03-06T18:05:35.024Z",
    },
    {
      id: "c549dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Unsafe driving",
      vehicle_id: "kk70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Divya",
      vehicle_friendly_name: "RJ45H5678",
      timestamp: "2023-03-07T20:45:20.124Z",
    },
    {
      id: "d549dbd2-45bc-4e34-9ea2-c82ced0279f1",
      alert_type: "Distracted driver",
      vehicle_id: "ll70a7e5-8397-4914-bbbb-4d6bb521ec67",
      driver_friendly_name: "Karthik",
      vehicle_friendly_name: "TS56J7890",
      timestamp: "2023-03-08T22:30:15.224Z",
    },
    // Add more alerts as needed
  ],
  vehicles: [
    {
      friendly_name: "KA12A3456",
      id: "dd70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "MH12A3456",
      id: "cc70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "TN34B5678",
      id: "ee70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "KL56C7890",
      id: "ff70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "KA78D1234",
      id: "gg70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "MH34E5678",
      id: "hh70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "GJ12F7890",
      id: "ii70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "UP23G1234",
      id: "jj70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "RJ45H5678",
      id: "kk70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "TS56J7890",
      id: "ll70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    // Add more vehicles as needed
    {
      friendly_name: "AP67K2345",
      id: "mm70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "DL78L3456",
      id: "nn70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "UP89M4567",
      id: "oo70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "KA90N5678",
      id: "pp70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
    {
      friendly_name: "MH01P6789",
      id: "qq70a7e5-8397-4914-bbbb-4d6bb521ec67",
    },
  ],
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  getAlerts: async () => {
    await delay(1000); // Simulate API delay
    return mockData.alerts;
  },
  getVehicles: async () => {
    await delay(1000); // Simulate API delay
    return mockData.vehicles;
  },
  markFalseAlarm: async (alertId) => {
    await delay(1000); // Simulate API delay
    // Simulate marking alert as false alarm
    mockData.alerts = mockData.alerts.map((alert) =>
      alert.id === alertId ? { ...alert, markedFalseAlarm: true } : alert
    );
  },
};

export default api;
