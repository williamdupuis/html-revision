"use strict"

// console.log(event);
$('.nav-item').on("click", function () {
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});


// Text writer
var word  = $('#tap-text').text().trim();

// Vider la div
$('#tap-text').text('');

// Parcourir les lettres du mot
for (let i=0 ; i<word.length ; i++) {
    console.log(word[i]);
    setTimeout(function () {
        $("#tap-text").append(word[i]);
    }, 300 * i )
}