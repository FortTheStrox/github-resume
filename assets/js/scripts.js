// A $( document ).ready() block.
$( document ).ready(function() {
    $( '.nav' ).load('nav.html');
    $( '.footer' ).load('footer.html');
    // set from invisible to visible for each page's content
    $(".landing").delay(200).animate({"opacity": "1"},1500);
    $(".about").delay(200).animate({"opacity": "1"},700);
    $(".skillset").delay(200).animate({"opacity": "1"},700);
    $(".resume").delay(200).animate({"opacity": "1"},700);
    
    $('.category1').on('click', function() {
        $('.card1').slideToggle(300);
    });
    $('.category2').on('click', function() {
        $('.card2').slideToggle(300);
    });
    $('.category3').on('click', function() {
        $('.card3').slideToggle(300);
    });
});