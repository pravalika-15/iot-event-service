Clone the Repository:

git clone https://github.com/your-username/iot-event-service.git
cd iot-event-service

Install Dependencies:

npm install

Set Up MongoDB:
it should work without this step, incase there is any issue with the mongoDb, You can try this step.

Replace the mongoDBConnectionString in server.js with your actual MongoDB connection string.
Ensure MongoDB is running locally or update the connection string accordingly.

Run:
npm start
The service will be running at http://localhost:3000.

API Endpoints

POST /event:

Payload: JSON with event details (timestamp, is_driving_safe, vehicle_id, location_type).

Example json event data for posting (in postman):

{
  "timestamp": "2023-12-14T12:30:00Z",
  "is_driving_safe": true,
  "vehicle_id": "ABC123",
  "location_type": "city_center"
}

actually if we want to see the alerts, we have to match this timestamp to the current one, it should be between
5 minutes as we check like that only.

we can get the current timestamp using this code 
const currentTimestamp = new Date().toISOString();
console.log(currentTimestamp);

GET /events:

Retrieve all driving events stored in the database.
api endpoint: http://localhost:3000/events


GET /alerts:

Retrieve all generated alerts stored in the database.
api endpoint: http://localhost:3000/alerts


GET /alert/{alert_id}:

Retrieve a single alert by its unique ID.
api endpoint: http://localhost:3000/alert/{alert_id-from-database}


The rule engine runs every 5 minutes to check for unsafe driving events in the past 5 minutes. 
Alerts are generated based on predefined thresholds for different location types (highway, city_center, commercial, residential).


