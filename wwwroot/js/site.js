// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// CALL TO DB
const callApi = async (callback, controllerName) => {
    const respone = await fetch(controllerName);
    const myJson = await respone.json();
    callback(myJson);
}
// DELETE CALL
const deleteTask = function (myDataObject) {
    const deleteData = async () => {
        const response = await fetch('https://localhost:44316/api/tasksapi/' + myDataObject, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        });
        const data = await response.json();

        // now do whatever you want with the data  
        console.log(data);
    }
    deleteData();
}
// ADD CALL
const addTask = function (myDataObject) {
    const addData = async () => {
        const response = await fetch('https://localhost:44316/api/tasksapi', {
            method: 'POST',
            body: JSON.stringify(myDataObject),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        buildTaskTable();
    }
    addData();
}

// GET CALL
    // GET TASK DETAILS

// EDIT CALL

// COMPLETE CALL

// build table of tasks 
const buildTaskTable = function () {
    var buildTable = function (jsonData) {
        var container = document.getElementById("taskcards");

        while (container.firstChild) {
            container.removeChild(container.firstChild)
        }
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
            var dataInput = document.createElement("input");
            dataInput.setAttribute("type", "hidden");
            dataInput.setAttribute("name", "taskid");
            dataInput.setAttribute("value", jsonData[containerData].id);

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

            // set action button onclick
            //deleteButton.onclick = function(jsonData[containerData]) {

            //}

            // append buttons to button div
            buttonDiv.appendChild(detailsButton);
            buttonDiv.appendChild(editButton);
            buttonDiv.appendChild(deleteButton);
            buttonDiv.appendChild(completeButton);
            buttonDiv.appendChild(dataInput);

            // append button div to card body
            cardBody.appendChild(buttonDiv);

            // append card body to card
            container.appendChild(card);
        }
    }
    callApi(buildTable, 'https://localhost:44316/api/tasksapi');
}

window.addEventListener('load', function () {
    buildTaskTable();
})
