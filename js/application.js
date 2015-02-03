/*

Lesson 3 - Bringing it Together in a JSON API Hack (13 hours)
OVERVIEW
In this section, you’ll put the advanced JavaScript and jQuery you learned earlier in this Unit into practice by building the biggest project thus far: a “hack,” or a creative project that shows off the skills you’re building.
For this project, you’re strongly encouraged to use a third-party “API” (Application Programming Interface) that lets you integrate with another service. 

GOALS
Understand how to use pull data from 3rd party APIs using JSON to supply content for your web page.

ASSIGNMENTS
1. jQuery and APIs
http://coding.smashingmagazine.com/2012/02/09/beginners-guide-jquery-based-json-api-clients/
http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about

2. Learn about Code Organization for jQuery
http://learn.jquery.com/code-organization/concepts/
http://learn.jquery.com/code-organization/beware-anonymous-functions/
http://learn.jquery.com/code-organization/dont-repeat-yourself/

3. Hack!
Time for the main project of this unit! This project will advance your JavaScript skills and show off everything you’ve learned so far. The requirements for this project are largely open ended. You'll be creating a web app that interfaces with a third-party API and does something interesting with the data. We'll leave it up to you to decide which API you want to use and what you want to do with the data, but do make sure to consult your mentor before you start coding up your project to ensure you won’t run into unexpected API rate limits or technology requirements. When you have an idea you want to pursue, post it in your Google+ community to get feedback and suggestions from your fellow students.

If you're looking for some inspiration, here are some project ideas (but feel free to come up with your own):
- Use official US Government census data (http://www.census.gov/developers/) to build an app that lets users find the number of people who meet a particular set of criteria, such as age, ethnicity, state, or county. There’s plenty of room to be creative here – you could make it into a guessing game (“How many people live in California between the ages of 15-24?”) or a census version of Price Is Right.
- Choose a theme of images, and create a creative layout for the corresponding image stream from Instagram (http://instagram.com/developer/). It could display one image at a time, or multiple images in one layout.
- Google Maps can be completely customized (https://developers.google.com/maps/) for most any project. Including a map itself is easy – you can simply drop in a few lines of code that Google provides and it will appear on your site. You’ll need to do more traditional API calls to get information such as directions based on input from users. For example, you might want to place your favorite restaurants on the map and get the directions to them from any address. If you can stand the design of the page, this (http://econym.org.uk/gmap/) is a solid tutorial. Or, do something more adventurous, like creating a completely different use for the zooming and panning techniques that made it famous (http://www.maplib.net/map.php?id=816). Imagine what could be done with a photo album! Two more cool examples of Google Maps hacks: PadMapper and GeoGreeting.
- Build your own Mad Libs (http://en.wikipedia.org/wiki/Mad_Libs), similar in functionality to this one (https://generalassemb.ly/letter-to-yourself), that emails you the results using a “mailto” URL that specifies a subject and sends the mad lib as the body. For more on how to specify a subject and body using the mailto url, check out this answer (http://www.askdavetaylor.com/can_i_have_a_mailto_link_specify_a_subject_and_body.html) about it. If you pick this option, make sure to read up on URL encoding (http://www.permadi.com/tutorial/urlEncoding/) (bonus: build a SoundCloud Mad Libs with song titles).
- Create a bookmarklet that, when clicked, sets up any selected text on the page as a Tweet. For background on building a bookmarklet, this tutorial on Making your own Bookmarklet with jQuery (http://coding.smashingmagazine.com/2010/05/23/make-your-own-bookmarklets-with-jquery/). If you need more of a push before getting started, the tutorial Create Bookmarklets – the Right Way (http://net.tutsplus.com/tutorials/javascript-ajax/create-bookmarklets-the-right-way/) is also strong.

Here’s a list of some of our favorite and more inspirational JSONP APIs along with a brief description of their functionality. For a much more complete list, check this out (http://www.programmableweb.com/apis/directory/1?format=JSONP).

- The Artsy API (http://artsy.net/api/v1/docs/index) lets you access information about artists and artworks.
- The Etsy API (http://www.etsy.com/developers/documentation/getting_started/jsonp) lets you access products and sellers.
- The Klout API (http://klout.com/s/developers/v2) gives you “social influence” scores for people based on their social media activity
- The Instagram API (http://instagram.com/developer/) lets you access a stream of public photos.
- The Tastekid API (http://www.tastekid.com/page/api) lets you integrate their recommendation service for music, movies, shows, and books (takes the input of one artist or book and outputs related one you might enjoy).
- The Foursquare API (https://developer.foursquare.com/) gives you access to data about venues and checkins. Note the instructions on the response page for using JSONP instead of JSON.
- The Census Bureau API (http://www.census.gov/developers/) has census data!

*/