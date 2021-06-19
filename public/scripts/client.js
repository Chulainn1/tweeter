/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const renderTweets = function(tweets) {

    $.each(tweets, (key) => {
      // console.log(tweets)
      // console.log(key);
      let tweet = createTweetElement(tweets[key]);
      $("#tweet-section").prepend(tweet);
    });

  }
  const escape = function (str) {
    // console.log("input:", str);
    let div = document.createElement("div");
    // console.log("the div:", div);
    div.appendChild(document.createTextNode(str));
    // console.log("output:", div.innerHTML);
    return div.innerHTML;
  };

  const createTweetElement = (tweetObj) => {
    // console.log("tweetobj:", tweetObj);

    const $tweet = `
      <article class="the-tweets">
        <header>

          <div class="identity"> 
            <img src="${tweetObj.user.avatars}">
            <h3>${tweetObj.user.name}</h3>
          </div>

          <div>${tweetObj.user.handle}</div>

        </header>
    
        <div class="body">${escape(tweetObj.content.text)}</div>

        <footer>

          <h3 class="daysAgo">${timeago.format(tweetObj.created_at)}</h3>

          <div class="options">
            <i class="fa fa-flag"></i>
            <i class="fa fa-retweet"></i>
            <i class="fa fa-heart"></i>
          </div>

        </footer>
    
      </article>`;
    
    return $tweet
      
  }

  $("#target").on("submit", function(event) {
    event.preventDefault();
   
    $('#error-container, h1').slideUp("slow");

    //Step 1: grab text from textarea
    const data = $(this).serialize();
    const value = $("#tweet-text").val();
    
    //Step 2: error handling for text 
    if((value) === "" || (value) === null) {
        
      $('#error-container, h1').text("❌ pls write something for people to read ❌");
      $( "#error-container, h1" ).slideDown( "slow" );

    } else if (value.length > 140) {

      $('#error-container, h1').text("❌ limit your words to a minimum of 140 characters ❌");
      $( '#error-container, h1' ).slideDown( "slow" );

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
      })

    }

  })

  const loadTweets = function() {
    $.ajax({ 
      url: "/tweets/",
      method: "GET",
      dataType: 'json'
    })
    .then((result) => {
      renderTweets(result);
    })
  }

  loadTweets();

});