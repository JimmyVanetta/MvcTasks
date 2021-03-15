// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// API Call
const callApi = async (callback, controllerName) => {
    const respone = await fetch(controllerName);
    const myJson = await respone.json();
    callback(myJson);
}

const buildTaskTable = function () {
    var buildTable = function (jsonData) {
        var container = document.getElementById("taskcards");
        for (var containerData in jsonData) {
            // setup card
            var card = document.createElement("div");
            card.style.class = 'card task';

            // setup card body
            var cardBody = document.createElement("div");
            cardBody.style.class = 'card-body';
            card.appendChild(cardBody);

            // setup elements in card
            var h5 = document.createElement("h5");
            var p = document.createElement("p");
            h5.innerText = jsonData[containerData].title;
            p.innerText = jsonData[containerData].description;
            h5.style.class = 'card-title'
            p.style.class = 'card-text'
            cardBody.appendChild(h5)
            cardBody.appendChild(p)

            container.appendChild(card);
        }
    }
    callApi(buildTable, 'https://localhost:44316/api/tasksapi');
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

