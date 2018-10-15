"use strict"

// Menu items
$(document).ready( function (event) {
    // console.log(event);
    $('.nav-item').on("click", function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
});
