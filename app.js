const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const studentRoutes = require("./routes/studentRoutes");
const logger = require("./middleware/logger");

app.use(logger);

// using home route to get the welcome message
app.get("/", (req, res) => {
    console.log("Student Management REST API is running!");
    res.send("Welcome to the Student Management REST API!!");
});

// connected student routes 
app.use("/students", studentRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})