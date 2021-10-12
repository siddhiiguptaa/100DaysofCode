
// node import for console input

const prompt = require("prompt-sync")({
    sigint: true
});
const fs = require('fs');


const {
    create
} = require("domain");
const {
    getEventListeners
} = require("events");
var localStorage = require('localStorage')


// importing local database
const studentDB = require('./localStudentDB.json');

// console.log(studentDB)

function createStudent() {
    const name = prompt("Student name?");
    console.log(`Name: ${name}`);
    `enter code here`

    const roll = prompt("Student roll?");
    console.log(`Roll: ${roll}`);
    `enter code here`

    const studentClass = prompt("Student class?");
    console.log(`Class: ${studentClass}`);
    `enter code here`

    studentDB[roll] = {
        "name": name,
        "roll": roll,
        "class": studentClass
    }
    // console.log(`Name: ${name} Roll: ${roll} Class: ${studentClass}`)

}


function readStudents() {
    for (const [key, value] of Object.entries(studentDB)) {
        console.log(studentDB[`${key}`]);
    }


}

function updateStudent() {
    const updateStudentRoll = prompt("Roll of student you want to update?");
    console.log(`Class: ${updateStudentRoll}`);
    `enter code here`
    // update the values 
    const name = prompt("new student name?");
    console.log(`Name: ${name}`);
    `enter code here`

    const roll = prompt("new student roll?");
    console.log(`Roll: ${roll}`);
    `enter code here`

    const studentClass = prompt("new student class?");
    console.log(`Class: ${studentClass}`);
    `enter code here`

    studentDB[roll] = {
        "name": name,
        "roll": roll,
        "class": studentClass
    }

}

function deleteStudent() {
    const deleteStudentRoll = prompt("Roll of student you want to delete?");
    console.log(`roll no to delete: ${deleteStudentRoll}`);
    `enter code here`

    // console.log()

    delete studentDB.deleteStudentRoll
}

function saveLocally(data) {
    if (typeof data != "string") {data = JSON.stringify(data)}

    fs.writeFile('./localStudentDB.json', data, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is saved successfully!`);
    }

});




/**
 * 
 * Write a code to add student details in a multidimensional array (consider this as primary database). 
 * Keep on adding as long as the user wants. 
 * Provide an interface to list, edit and delete student records. 
 * Before quitting the application, save the contents of array to file (secondary database), 
 * when the program starts retrieve the data from disk.
 * 
 * @param secondaryStudentDatabase = studentDB
 * @param primaryStudentDatabase = localStudentDB
 */


// interface to access all the above functions

function student() {

    const
     operationsList = "\n1.Add a New Student\n2.Edit an existing Student\n3.Remove Student\n4.List Students\n5.save\n6.exit()"
    console.log(operationsList)

    const operations = prompt("\n\nChoose a number for the operation you wish to perform:")
    // console.log(typeof Number(operations))
    console.log(`The Operation selected is Number ${operations} \n`)

    if (Number(operations) <= 5 && Number(operations) > 0) {

        switch (Number(operations)) {
            case 1:
                // code block
                createStudent()
                student()
                break;
            case 2:
                updateStudent()
                student()
                // code block
                break;
            case 3:
                deleteStudent()
                student()
                break;
            case 4:
                readStudents()
                student()
            case 5:
                saveLocally(studentDB)
                student()
            default:
                // code block
                student()
        }
    } else if (Number(operations) == 6) {
        return `thank you`
    } else {
        console.log("INVALID OPERATION! select an operation number from the list")
        student()
    }

}}

student()