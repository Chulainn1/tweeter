# Tweeter Project

Tweeter is a simple, single-page Twitter clone. This simple app helped me build upon my HTML, CSS, JS, jQuery and AJAX front-end skills and my Node, Express and MongoDB back-end skills.

This project was quite the learning experience for me. jQuery is a versitile JavaScript library which made HTML document manipulation and event handling stright-forward. AJAX enabled this web application to send and retrieve data asynchonously. Along side learning those technologies I was re-introduced to HTML and CSS. I have come to realize that both of these too, require my full attention. Specifcally, learning to use flexbox at the start took longer than expected. 

## Final Product

![View From Desktop](https://github.com/Chulainn1/tweeter/blob/master/docs/desktopView.png?raw=true)

![View From Tablet](https://github.com/Chulainn1/tweeter/blob/master/docs/tabletView.png?raw=true)

![Errors and Counter](https://github.com/Chulainn1/tweeter/blob/master/docs/errorAndcounter.png?raw=true)

![Successful Tweet](https://github.com/Chulainn1/tweeter/blob/master/docs/successfulTweet.png?raw=true)




## Getting Started 

1. Install all dependencies (using the `npm install` command).
2. Run the development web server using the `npm run local` command.
3. Make sure to use `localhost:8080` in your browser.

## Features

As previously stated this is a fairly simple app, but there are some features.

In the textarea under the `Compose Tweet` section you can type something you would like to say. The `character counter` in the bottom right begins at 140 and decrease based on input. If you type more than 140 characters the counter will turn red and go negative. (A function has been used to combat XSS).

If you press the `TWEET` button in the bottom left when there is either nothing or too many characters in the textarea an `error message` will slide down (using jQuery). 

A successful tweet will be rendered at the top of the tweet section `without a manual page refresh`. You will also see the `time` of the post displayed on the bottom left of the tweet container. 

When you scroll beyond the Compose Tweet section (in Desktop dimensions) you can click the `WRITE A NEW TWEET` in the top right of the header to bring you to its location. 

I've added som simple responsive web design where in dimensions of width above 1024px is `desktop` mode and dimensions below are `tablet` mode with their own corresponding look. 


## Dependencies 

* body-parser "^1.19.0"
* chance "^1.1.7"
* express "^4.17.1"
* md5 "^2.3.0"
