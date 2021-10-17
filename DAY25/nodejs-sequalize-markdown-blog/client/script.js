$(function () {

    var app = $.sammy(function () {

        this.element_selector = '#content';

        this.get('#/add', function (context) {
            context.$element().load('addEmployee.html', function () {
                
                $('#btnAdd').click(addOrUpdateEmployee)

            });
        });

        this.get('#/list', function (context) {
            context.$element().load('listEmployee.html', function () {

                $.ajax({
                    url: "http://localhost:3000/list",
                    type: 'GET',
                    success: function (data) {

                        for (let index = 0; index < data.length; index++) {
                            $('ul').append('<li class="list-group-item"><div class="row"><div class="col">' +
                                data[index].firstName + '</div><div class="col">' +
                                data[index].lastName + '</div><div class="col">' +
                                data[index].email + '</div>'
                                + `<div class="col ">
                                <a href="#/add/${data[index].id} "class="btn btn-primary" id="btnEdt">edit</a> &nbsp;`
                                + `<input type="button" onclick="deleteEmployee(${data[index].id})"class="btn btn-primary" id="btnDel" value="Delete" />
                                </div>
                                </div>
                                </li>`

                            );

                        }

                    }
                })



            });
        });

        this.get('#/add/:id', function (context) {
            context.$element().load('addEmployee.html', function () {
                $.ajax({
                    url: "http://localhost:3000/employee/"+location.hash.substring(6),
                    type: 'GET',
                    contentType: 'application/json',
                    success: function (data) {
                        console.log("Employee retrieved successfully! ",data)
                        $('#inputName').val(data.firstName)
                        $('#inputSurname').val(data.lastName)
                        $('#inputMail').val(data.email)
                    }
                })

                $('#btnAdd').click(addOrUpdateEmployee)    
            });
        });

    });


    app.run('#/');

});

function addOrUpdateEmployee() {
    console.log("Called ...")
    var employee = {
        firstName: $('#inputName').val(),
        lastName: $('#inputSurname').val(),
        email: $('#inputMail').val()
    }

    let id = location.hash.substring(6);
    console.log("check id: ",id)
    if (!id) {
        $.ajax({
            url: "http://localhost:3000/employee",
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(employee),
            success: function (data) {
                console.log("Employee added successfully!")
                alert("emplyee data added successfully")
            }
        })
    }
    else {
        $.ajax({
            url: "http://localhost:3000/employee/" + id,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(employee),
            success: function (data) {
                console.log("Employee updated successfully!")
            }
        })
    }
}

function deleteEmployee(id) {
    $.ajax({
        url: "http://localhost:3000/delete",
        type: 'DELETE',
        data: JSON.stringify({ "id": id }),
        contentType: 'application/json',
        success: function (data) {
            console.log(data)
            location.reload();
        }
    })
}


