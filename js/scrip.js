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
  }); //get JSON
}); //function
