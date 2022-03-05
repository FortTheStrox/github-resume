// A $( document ).ready() block.
$( document ).ready(function() {
    $( '.nav' ).load('nav.html', function() {
        // we specify id of fadein which is child of main class
        $(".nav #fadein").delay(900).animate({"opacity": "1"},700);
        
    });
    $( '.footer' ).load('footer.html', function() {
        // we specify id of fadein which is child of main class
        $("footer #fadein").delay(900).animate({"opacity": "1"},700); 
    });
    // set from invisible to visible for each page's content
    $(".landing").delay(200).animate({"opacity": "1"},6100);
    $(".about").delay(200).animate({"opacity": "1"},700);
    $(".skillset").delay(200).animate({"opacity": "1"},700);
    $(".resume").delay(200).animate({"opacity": "1"},700);

});