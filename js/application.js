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

2. Learn about Code Organization for jQuery
http://learn.jquery.com/code-organization/concepts/
http://learn.jquery.com/code-organization/beware-anonymous-functions/
http://learn.jquery.com/code-organization/dont-repeat-yourself/

3. Hack!
Time for the main project of this unit! This project will advance your JavaScript skills and show off everything you’ve learned so far. The requirements for this project are largely open ended. You'll be creating a web app that interfaces with a third-party API and does something interesting with the data. We'll leave it up to you to decide which API you want to use and what you want to do with the data, but do make sure to consult your mentor before you start coding up your project to ensure you won’t run into unexpected API rate limits or technology requirements. When you have an idea you want to pursue, post it in your Google+ community to get feedback and suggestions from your fellow students.

- Choose a theme of images, and create a creative layout for the corresponding image stream from Instagram (http://instagram.com/developer/). It could display one image at a time, or multiple images in one layout.
- Google Maps can be completely customized (https://developers.google.com/maps/) for most any project. Including a map itself is easy – you can simply drop in a few lines of code that Google provides and it will appear on your site. You’ll need to do more traditional API calls to get information such as directions based on input from users. For example, you might want to place your favorite restaurants on the map and get the directions to them from any address. If you can stand the design of the page, this (http://econym.org.uk/gmap/) is a solid tutorial. Or, do something more adventurous, like creating a completely different use for the zooming and panning techniques that made it famous (http://www.maplib.net/map.php?id=816). Imagine what could be done with a photo album! Two more cool examples of Google Maps hacks: PadMapper and GeoGreeting.

Here’s a list of some of our favorite and more inspirational JSONP APIs along with a brief description of their functionality. For a much more complete list, check this out (http://www.programmableweb.com/apis/directory/1?format=JSONP).

- The Instagram API (http://instagram.com/developer/) lets you access a stream of public photos.

*/

////////////////////////////////
//
// CONFIGURATION VARIABLES http://stuffthatspins.com/2014/03/11/display-instagram-hashtag-and-user-picture-stream-really-easy-with-jquery-and-json/
//
////////////////////////////////

var access_token = "18360510.5b9e1e6.de870cc4d5344ffeaae178542029e98b"; //*** YOU NEED TO GET YOUR OWN ACCESS TOKEN FROM INSTAGRAM
//http://instagram.com/developer/authentication/
//http://dmolsen.com/2013/04/05/generating-access-tokens-for-instagram/

var resolution = "thumbnail"; // resolution: low_resolution, thumbnail, standard_resolution
var user_id = "12228466"; //userid
var hashtag = "ficb2010"; // #hashtag
var last_url = "";

//HASHTAG URL - USE THIS URL FOR HASHTAG PICS
var start_url = "https://api.instagram.com/v1/tags/"+hashtag+"/media/recent/?access_token="+access_token;
//USER URL - USE THIS URL FOR USER PICS
//var start_url = "https://api.instagram.com/v1/users/"+user_id+"/media/recent/?access_token="+access_token;

//https://api.instagram.com/v1/tags/racehungry/media/recent?access_token=1836…6303057241113856435_1395676110362&_=1395676128688&max_tag_id=1343521624608

function loadEmUp(next_url) {

	url = next_url;
	
	$(function() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: url ,
			success: function(data) {

				next_url = data.pagination.next_url;
	  		count = 20; 

	  		//uncommment to see da codez
	        //console.log("count: " + count );
	        //console.log("next_url: " + next_url );
			//console.log("data: " + JSON.stringify(data) );
			
			for (var i = 0; i < count; i++) {
				if (typeof data.data[i] !== 'undefined') {
					$("#instagram").append("<div class='instagram-wrap' id='pic-"+ data.data[i].id +"'><a target='_blank' href='" + data.data[i].link +"'><span class='likes'>"+data.data[i].likes.count +"</span><img class='instagram-image' src='" + data.data[i].images.low_resolution.url +"' /></a></div>");  
				}  
			}     

			console.log("next_url: " + next_url);
			$("#showMore").hide();
			if (typeof next_url === 'undefined' || next_url.length < 10 ) {
				console.log("NO MORE");
				$("#showMore").hide();
				$("#more").attr( "next_url", "");
			} else {
	        //set button value
	        console.log("displaying more");
	        $("#showMore").show();
	        $( "#more" ).attr( "next_url", next_url);
	        last_url = next_url;
	    }
	}
});
});
}

//CALL THE SCRIPT TO START...
$( document ).ready(function() {
	//APPEND LOAD MORE BUTTON TO THE BODY...
	$("#more" ).click(function() {  
		var next_url = $(this).attr('next_url');
		loadEmUp(next_url);
		return false;
	});
	//start your engines
	loadEmUp(start_url);
});