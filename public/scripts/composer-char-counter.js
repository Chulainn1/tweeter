$(document).ready(function() {

  // event of an input is better than keypress as input will keep trackof deletions also.
  $("#tweet-text").on("input", function(event) {

    // using 'this' to grab the value and length of input, and subtracting it from the
    // character limit. Set counter to its corresponding html class and update it with
    // remaining characters.
    const $textLength = $(this).val().length;
    const $remainingChars = 140 - $textLength;

    const counter = $(this).closest("form").find(".counter");
    
    counter.html($remainingChars);

    // logic to change the color of the counter by adding or removing a class
    if ($remainingChars < 0) {
      counter.addClass("red-counter");
    } else {
      counter.removeClass("red-counter");
    }

  });
  
});

