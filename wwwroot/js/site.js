// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// hide edit and and complete if task has been marked completed

document.addEventListener("DOMContentLoaded", function () {
    var checkedList = document.getElementsByClassName('iscompleted');
    var elements = document.getElementsByClassName('editaction completeaction');
    var i;

    for (i = 0; i < checkedList.length; i++) {
        if (checkedList[i].checked) {
            elements[i].style.display = 'none';
        }
    }
});