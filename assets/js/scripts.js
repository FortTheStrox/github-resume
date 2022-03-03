// $( document ).ready(function() {
//     $('.main').load("main.html");
// });

// A $( document ).ready() block.
$( document ).ready(function() {
    $( '.main' ).load('main.html', function() {
        $("footer").delay(850).animate({"opacity": "1"},700);
    });
    $("#background").delay(200).animate({"opacity": "1"}, 700);
});