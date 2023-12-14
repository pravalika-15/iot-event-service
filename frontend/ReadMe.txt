after cloning 
npm install
npm start


Open the application in your web browser.
Use the search bar to filter alerts based on text, vehicle number, and date range.
View the list of alerts 

The application uses mocked data for alerts and vehicles.

Folder Structure
src/components: React components.
src/api.js: Mocked API data and functions.
src/App.js: Main application component.
src/App.css: Styles for the application.


Styling
The application styles are defined in the App.css file.

we can mark the alerts as false alarm, then the ui changes, but the ui changes wont persist after reloading as
i am not using any database to persist the changes in the data, so in the original data, no alert is false, and
wont change.