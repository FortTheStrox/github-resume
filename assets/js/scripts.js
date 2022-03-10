// A $( document ).ready() block.
$( document ).ready(function() {
    $( '.nav' ).load('nav.html');
    $( '.footer' ).load('footer.html');
    // set from invisible to visible for each page's content
    $(".landing").delay(200).animate({"opacity": "1"},1500);
    $(".about").delay(200).animate({"opacity": "1"},700);
    $(".skillset").delay(200).animate({"opacity": "1"},700);
    $(".resume").delay(200).animate({"opacity": "1"},700);
    
    // TOGGLE BUTTON LOGIC
    $('.category_all').on('click', function() {
        const elements = document.querySelectorAll('.card');
        Array.from(elements).forEach((element) => {
            // KEYFRAME ANIMATION FOR FADE IN
            element.animate([
                {opacity: 0},
                {opacity: 1}]
                , 800);
            element.style.display = "flex";
        })
    });
    $('.category1').on('click', function() {
        let filter = 'card1';
        const elements = document.querySelectorAll('.card');
        Array.from(elements).forEach((element) => {
            if(element.className.includes(filter)) {
                // KEYFRAME ANIMATION FOR FADE IN
                element.animate([
                    {opacity: 0},
                    {opacity: 1}]
                    , 800);
                element.style.display = "flex";
            } else {
                // KEYFRAME ANIMATION FOR FADE OUT
                element.animate([
                    {opacity: 1},
                    {opacity: 0}]
                    , 800);
                element.style.display = "none";
            }
        })
    });
    $('.category2').on('click', function() {
        let filter = 'card2';
        const elements = document.querySelectorAll('.card');
        Array.from(elements).forEach((element) => {
            if(element.className.includes(filter)) {
                element.animate([
                    {opacity: 0},
                    {opacity: 1}]
                    , 800);
                element.style.display = "flex";
            } else {
                element.animate([
                    {opacity: 1},
                    {opacity: 0}]
                    , 800);
                element.style.display = "none";
            }
        })
    });
    $('.category3').on('click', function() {
        let filter = 'card3';
        const elements = document.querySelectorAll('.card');
        Array.from(elements).forEach((element) => {
            if(element.className.includes(filter)) {
                element.animate([
                    {opacity: 0},
                    {opacity: 1}]
                    , 800);
                element.style.display = "flex";
            } else {
                element.animate([
                    {opacity: 1},
                    {opacity: 0}]
                    , 800);
                element.style.display = "none";
            }
        })
    });
});