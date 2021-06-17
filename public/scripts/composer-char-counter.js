$(document).ready(function() {

  $( "#tweet-text" ).on("input", function(event) {

    //using this to grab the value of textarea, as
    const $textLength = $(this).val().length;
    const $remainingChars = 140 - $textLength;

    const counter = $(this).closest("form").find(".counter");
    
    counter.html($remainingChars);

    if ($remainingChars < 0) {
      counter.addClass("red-counter");
    } else {
      counter.removeClass("red-counter");
    }

  });
  
});

