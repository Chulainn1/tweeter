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


  const tweetContainer = (tweetObj) => {
    console.log(tweetObj.user.avatars);
    $tweet = (`
      <article class="the-tweets">
        <header>
          <div class="identity> 
            <img src="${tweetObj.user.avatars}">
            <h3>${tweetObj.user.name}</h3>
          </div>
          <div>${tweetObj.user.handle}</div>
        </header>
    
        <div class="body">${tweetObj.content.text}</div>
        <footer class="tweets-footer">
          <h3 class="daysAgo">${timeago.format(tweetObj.created_at)}</h3>
          <div class="options">
            <i class="fa fa-flag"></i>
            <i class="fa fa-retweet"></i>
            <i class="fa fa-heart"></i>
          </div>
        </footer>
    
      </article>`
    );
    return $tweet
      
  }

  $(".tweet-section").append(tweetContainer(tweetData[0]));
  $(".tweet-section").append(tweetContainer(tweetData[1]));
  // console.log(tweetContainer(tweetData));

});
//