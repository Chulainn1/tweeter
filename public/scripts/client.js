/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1623530565747
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1623616965747
    }
  ]

  const renderTweets = function(tweets) {

    $.each(tweets, (key) => {
      // console.log(tweets)
      // console.log(key);
      let tweet = createTweetElement(tweets[key]);
      $("#tweet-section").append(tweet);
    });

  }

  const createTweetElement = (tweetObj) => {
    console.log("tweetobj:", tweetObj);
    const $tweet = `
      <article class="the-tweets">
        <header>

          <div class="identity"> 
            <img src="${tweetObj.user.avatars}">
            <h3>${tweetObj.user.name}</h3>
          </div>

          <div>${tweetObj.user.handle}</div>

        </header>
    
        <div class="body">${tweetObj.content.text}</div>

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

  // $(".tweet-section").append(createTweetElement(tweetData[0]));
  // $(".tweet-section").append(createTweetElement(tweetData[1]));
  renderTweets(tweetData);

  $("#target").on("submit", function(event) {
    console.log('called');
    event.preventDefault();

    //Step 1: grab text from textarea
    const data = $('#tweet-text').serialize()
    console.log(data);
    //Step 2: error handling for text 
    //Step 3: call back end with the text

    $.ajax({ 
      url: "/tweets/",
      method: "POST",
      data: {text: data}
    })
    .then((result) => {
      console.log("it worked");
    })

  })
});