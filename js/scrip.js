'use strict';
// Do a function.execute whenever jquery loads
$(function() {
  // Use jquery's getJSON function to load our data file, when that data file is received, it is going to execute a function literal. Read the content of data.json into a data object
  $.getJSON('data.json', function(data) {
    // Load the contents of the template we created in the index.html file
    let template = $('#catstpl').html();

    // this is the part we use moustache to process the received data and feed it into the template we created earlier
    let html = Mustache.to_html(template, data);

    $('#carousel').html(html);

    // Use the jquery cycle to rotate the images to create a carousel
    // check http://jquery.malsup.com/cycle/browser.html for more info and http://jquery.malsup.com/cycle/options.html for different options

    //get the carousel element and load the jquery cycle function
    // the cycle function will take an object as a parameter
    $('#carousel').cycle({
      fx: 'fade',
      pause: 1,
      next: '#next_btn',
      prev: '#prev_btn',
      speed: 500,
      timeout: 1000
    });
  }); //get JSON
}); //function
