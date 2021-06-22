/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // The escape function stops XSS. It is used in createTweetElement on line 37
  // which corresponds to the content typed by a user.

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // A function that uses template literals to construct the tweets for viewing
  // pleasure.
  const createTweetElement = (tweetObj) => {

    const $tweet = `
      <article class="the-tweets">
        <header>

          <div class="identity"> 
            <img src="${tweetObj.user.avatars}">
            <h3>${tweetObj.user.name}</h3>
          </div>

          <div>${tweetObj.user.handle}</div>

        </header>

        <body>

        <div class="body">${escape(tweetObj.content.text)}</div>

        </body>

        <footer>

          <h3 class="daysAgo">${timeago.format(tweetObj.created_at)}</h3>

          <div class="options">
            <i class="fa fa-flag"></i>
            <i class="fa fa-retweet"></i>
            <i class="fa fa-heart"></i>
          </div>

        </footer>
    
      </article>`;
    
    return $tweet;
      
  };

  // On the event that the user submits a new tweet, error handling occurs for zero
  // and max characters input in the textarea. ajax POST request to backend is made with
  // data. Empty the tweet-section with every successful submit and reset the textarea
  // to be empty and the counter reset to 140.

  $("#target").on("submit", function(event) {
    event.preventDefault();
   
    $('#error-container, h1').slideUp("slow");

    //Step 1: grab text from textarea
    const data = $(this).serialize();
    const value = $("#tweet-text").val();
    
    //Step 2: error handling for text
    if ((value) === "" || (value) === null) {
        
      $('#error-container, h1').text("❌ pls write something for people to read ❌");
      $('#error-container, h1').slideDown("slow");

    } else if (value.length > 140) {

      $('#error-container, h1').text("❌ limit your words to a minimum of 140 characters ❌");
      $('#error-container, h1').slideDown("slow");

    } else {

      //Step 3: call back end with the text

      $.ajax({
        url: "/tweets/",
        method: "POST",
        data: data
      })
        .then((result) => {
          $("#tweet-section").empty();
          loadTweets();
        });
      // Ideally add a helper function used within the char-counter file.
      $("#tweet-text").val("");
      $("#counter").val(140);
    }

  });

  // A function that is passed an array of tweets. Tweets at each key is passed
  // to a function that creates the tweet and stored in a variable. It is then
  // rendered to the top of the tweet section.
  const renderTweets = function(tweets) {

    $.each(tweets, (key) => {
      let tweet = createTweetElement(tweets[key]);
      $("#tweet-section").prepend(tweet);
    });

  };

  // Function that GETs the tweets and passes them to the renderTweets function.
  const loadTweets = function() {
    $.ajax({ 
      url: "/tweets/",
      method: "GET",
      dataType: 'json'
    })
      .then((result) => {
        renderTweets(result);
      });
  };

  loadTweets();

});