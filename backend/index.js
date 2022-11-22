const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get("/", (req, res) => {
  res.send("Hello World");
  //res.redirect('../frontend/index.html');
});
// Require employee routes
const employeeRoutes = require("./src/routes/employee.routes");
const userRoutes = require("./src/routes/user.routes");
const medicineRoutes = require("./src/routes/medicine.routes");
const doctroRoutes = require("./src/routes/doctor.routes");
const appointmentRoutes = require("./src/routes/appointment.routes");
// using as middleware
app.use("/api/v1/employees", employeeRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/medicine", medicineRoutes);
app.use("/api/v1/doctor", doctroRoutes);
app.use("/api/v1/appointment", appointmentRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
