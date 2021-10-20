const express = require("express");
const app = express();
var cors = require('cors')
const bodyParser = require("body-parser");
const http = require("http");
const port = 3000;

const studentQuery = require('../server/query.js');

app.use(bodyParser.json());
app.use(cors());

var studentArray = [];
app.post('/student', function (req, res) {
    studentArray.push(req.body);
    studentQuery.addStudent(
      req.params.id,
      req.body.firstName,
      req.body.lastName,
      req.body.studentRoll,
      req.body.studentClass
    );
    console.log(studentArray);
    res.status(200).json(studentArray);
});

app.get('/list', async function (req, res) {
    let data = await studentQuery.getAllStudentData();
    res.status(200).send(data);
});

app.get("/student/:id", async function (req, res){
    let data = await studentQuery.getStudentData(req.params.id);
    res.status(200).send(data);
})
app.put("/student/:id", async function (req, res){
    console.log("updating", req.params.id, req.body)
    // console.log(req.body)
    studentQuery.getStudentData(req.params.id)

    await studentQuery.updateStudentData(
        req.params.id, 
        req.body.firstName, 
        req.body.lastName, 
        req.body.studentRoll,
        req.body.studentClass
        )
})

app.delete('/delete', async function (req, res) {
    await studentQuery.deleteUser(req.body.id);
    let data = "Student\'s Data deleted successfully!"
    res.status(200).send(data);
})

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`))
http.createServer(app);