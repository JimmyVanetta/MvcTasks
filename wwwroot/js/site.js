// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// API Call
const callApi = async (callback, controllerName) => {
    const respone = await fetch(controllerName);
    const myJson = await respone.json();
    callback(myJson);
}

const deleteApi = async (callback, controllerName) => {
    const response = await delete(controllerName);
}

// build table of tasks
const buildTaskTable = function () {
    var buildTable = function (jsonData) {
        var container = document.getElementById("taskcards");
        for (var containerData in jsonData) {

            // setup card
            var card = document.createElement("div");
            card.className = 'card task';

            // setup card body
            var cardBody = document.createElement("div");
            cardBody.className = 'card-body';
            card.appendChild(cardBody);

            // setup detail elements
            var title = document.createElement("h5");
            var createDate = document.createElement("h6");
            var dueDate = document.createElement("h6");
            var description = document.createElement("p");

            // set detail element class names
            title.className = 'card-title title';
            createDate.className = 'card-text createdate';
            dueDate.className = 'card-text duedate';
            description.className = 'card-text description';

            // set detail elements inner text
            title.innerText = jsonData[containerData].title;
            createDate.innerText = 'Created: ' + jsonData[containerData].createDate;
            dueDate.innerText = 'Due: ' + jsonData[containerData].dueDate;
            description.innerText = jsonData[containerData].description;

            // append details to card body
            cardBody.appendChild(title);
            cardBody.appendChild(createDate);
            cardBody.appendChild(dueDate);
            cardBody.appendChild(description);

            // setup completed check box
            var completedDiv = document.createElement("div");
            var completedLabel = document.createElement("p");
            var completed = document.createElement("input");
            completed.setAttribute("type", "checkbox");

            // set check box class names
            completedDiv.className = "checkbox";
            completedLabel.className = "completedlabel";

            // set check box label inner text
            completedLabel.innerText = "Completed";

            // disable check box
            completed.disabled = true;

            // append check box to check box label
            completedDiv.appendChild(completedLabel);
            completedDiv.appendChild(completed);

            // append completed label to card body
            cardBody.appendChild(completedDiv);

            // setup action buttons
            var buttonDiv = document.createElement("div");
            var detailsButton = document.createElement("button");
            var editButton = document.createElement("button");
            var deleteButton = document.createElement("button");
            var completeButton = document.createElement("button");

            // set action button class names
            buttonDiv.className = "actionbuttons";
            detailsButton.className = "btn-default btn-sm";
            editButton.className = "btn-default btn-sm";
            deleteButton.className = "btn-danger btn-sm";
            completeButton.className = "btn-success btn-sm";

            // set action buttons inner text
            detailsButton.innerText = "Details";
            editButton.innerText = "Edit";
            deleteButton.innerText = "Delete";
            completeButton.innerText = "Complete";

            // append buttons to button div
            buttonDiv.appendChild(detailsButton);
            buttonDiv.appendChild(editButton);
            buttonDiv.appendChild(deleteButton);
            buttonDiv.appendChild(completeButton);

            // append button div to card body
            cardBody.appendChild(buttonDiv);

            // append card body to card
            container.appendChild(card);
        }
    }
    callApi(buildTable, 'https://localhost:44316/api/tasksapi');
}

const deleteTaskFromTable = function (id) {
    deleteApi(deleteTaskFromTable, 'https://localhost:44316/api/tasksapi/' + id)
}

document.addEventListener("DOMContentLoaded", function () {
    var checkedList = document.getElementsByClassName('iscompleted');
    var edit = document.getElementsByClassName('editaction');
    var complete = document.getElementsByClassName('completeaction');
    var i;
    // Hide edit and complete buttons for completed tasks
    for (i = 0; i < checkedList.length; i++) {
        if (checkedList[i].firstElementChild.checked) {
            edit[i].style.display = 'none';
            complete[i].style.display = 'none';
        }
    }
    buildTaskTable();
});

