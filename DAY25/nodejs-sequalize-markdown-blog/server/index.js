const express = require("express");
const app = express();
var cors = require('cors')
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

const employeeQuery = require('../server/query.js');

app.use(bodyParser.json());
app.use(cors());

var employeeArray = [];
app.post('/employee', function (req, res) {
    employeeArray.push(req.body);
    employeeQuery.addEmployee(req.body.firstName, req.body.lastName, req.body.email)
    res.status(200).json(employeeArray);
});

app.get('/list', async function (req, res) {
    let data = await employeeQuery.getAllEmployeeData();
    res.status(200).send(data);
});

app.get("/employee/:id", async function (req, res){
    let data = await employeeQuery.getEmployeeData(req.params.id);
    res.status(200).send(data);
})
app.put("/employee/:id", async function (req, res){
    console.log("updating", req.params.id, req.body)
    employeeQuery.getEmployeeData(req.params.id)
    await employeeQuery.updateEmployeeData(req.params.id, req.body.firstName, req.body.lastName, req.body.email)
})

app.delete('/delete', async function (req, res) {
    await employeeQuery.deleteUser(req.body.id);
    let data = "Employee\'s Data deleted successfully!"
    res.status(200).send(data);
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))
http.createServer(app);