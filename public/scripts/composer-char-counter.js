$(document).ready(function() {

  $( "#tweet-text" ).keypress(function(event) {

    //using this to grab the value of textarea, as
    let textLength = $(this).val().length;
    let remainingChars = 140 - textLength;
    console.log(remainingChars)


    let counter = $(this).closest("form").find(".counter");
    counter.text(remainingChars);

    if (remainingChars < 0) {
      counter.css("color", "red");
    } else {
      counter.css("color", "black")
    }


  });
  
});

