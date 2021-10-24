$(function () {
  var app = $.sammy(function () {
    this.element_selector = "#content";

    this.get("#/add", function (context) {
      context.$element().load("addStudent.html", function () {
        $("#btnAdd").click(addOrUpdateStudent);
      });
    });

    this.get("#/list", function (context) {
      context.$element().load("listStudent.html", function () {
        $.ajax({
          url: "http://localhost:3000/list",
          type: "GET",
          success: function (data) {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
              $("ul").append(
                '<li class="list-group-item"><div class="row"><div class="col">' +
                  data[index].firstName +
                  '</div><div class="col">' +
                  data[index].lastName +
                  '</div><div class="col">' +
                  data[index].studentRoll +
                  '</div><div class="col">' +
                  data[index].studentClass +
                  "</div>" +
                  `<div class="col ">
                                <a href="#/add/${data[index].id} "class="btn btn-primary" id="btnEdt">edit</a> &nbsp;` +
                  `<input type="button" onclick="deleteStudent(${data[index].id})"class="btn btn-primary" id="btnDel" value="Delete" />
                                </div>
                                </div>
                                </li>`
              );
            }
          },
        });
      });
    });

    this.get("#/add/:id", function (context) {
      context.$element().load("addStudent.html", function () {
        $.ajax({
          url: "http://localhost:3000/student/" + location.hash.substring(6),
          type: "GET",
          contentType: "application/json",
          success: function (data) {
            // console.log(`Data for add${data}`);

            console.log("student retrieved successfully! ", data);
            $("#inputName").val(data.firstName);
            $("#inputSurname").val(data.lastName);
            $("#inputRoll").val(data.studentRoll);
            $("#inputClass").val(data.studentClass);
          },
        });

        $("#btnAdd").click(addOrUpdateStudent);
      });
    });
  });

  app.run("#/");
});

function addOrUpdateStudent() {
  console.log("Called ...");
  var student = {
    firstName: $("#inputName").val(),
    lastName: $("#inputLastname").val(),
    studentRoll: $("#inputRoll").val(),
    studentClass: $("#inputClass").val(),
  };

  let id = location.hash.substring(6);
  console.log("check id: ", id);
  if (!id) {
    $.ajax({
      url: "http://localhost:3000/student",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(student),
      success: function (data) {
        console.log("student added successfully!");
        console.log(data);

        alert("student data added successfully");
      },
    });
  } else {
    $.ajax({
      url: "http://localhost:3000/student/" + id,
      type: "PUT",
      contentType: "application/json",
      data: JSON.stringify(student),
      success: function (data) {
        console.log(data);
        console.log("student updated successfully!");
      },
    });
  }
}

function deleteStudent(id) {
  $.ajax({
    url: "http://localhost:3000/delete",
    type: "DELETE",
    data: JSON.stringify({
      id: id,
    }),
    contentType: "application/json",
    success: function (data) {
      console.log(data);
      location.reload();
    },
  });
}
