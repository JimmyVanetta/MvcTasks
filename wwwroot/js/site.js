// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// API Call
const callApi = async (callback, controllerName) => {
    const respone = await fetch(controllerName);
    const myJson = await respone.json();
    callback(myJson);
}
// hide edit and and complete if task has been marked complete
document.addEventListener("DOMContentLoaded", function () {
    var checkedList = document.getElementsByClassName('iscompleted');
    var edit = document.getElementsByClassName('editaction');
    var complete = document.getElementsByClassName('completeaction');
    var i;

    for (i = 0; i < checkedList.length; i++) {
        if (checkedList[i].firstElementChild.checked) {
            edit[i].style.display = 'none';
            complete[i].style.display = 'none';
        }
    }

    var buildTable = function (jsonData) {
        var table = document.getElementsByClassName("table")
        for (var tableData in jsonData) {

        }
    }
    if (document.getElementsByClassName("table")) {
        callApi(buildTable, 'https://localhost:44316/api/tasksapi%27');
    }
});

