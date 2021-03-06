// Like many APIs, GIPHY requires developers to use a key to access their API data. To use the GIPHY API, you'll need a GIPHY account (don't worry, it's free!) and then obtain an API Key by creating an app.
apiKey = "0W8ZtmOEBmYXOlbtuwNyvjahXusTY2ld";
// Make sure you switch the protocol in the query URL from http to https, or the app may not work properly when deployed to Github Pages.

// Instructions

$(document).ready(function(){

// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
var comedians = ["Key and Peele", "Jerry Seinfeld", "Jim Carrey", "Dave Chappelle", "Will Ferrell", "Amy Schumer", "Kevin Hart", "Sarah Silverman", "Robin Williams", "Chris Rock"];

// Dynamically creating the buttons with jQuery
function renderButtons() {
    $("#comedianButtons").empty();
    // Looping through the array of comedians
    for (var i = 0; i < comedians.length; i++) {
      // Then dynamicaly generating buttons for each comedian in the array.
      // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
      var a = $("<button>");
      // Adding a class
      a.addClass("comedian");
      // Adding a data-attribute with a value at index i
      a.attr("data-name", comedians[i]);
      // Providing the button's text with a value at index i
      a.text(comedians[i]);
      // Adding the button to the HTML
      $("#comedianButtons").append(a);
    }
  }

//   $.each(comedians, function(index, value){
//     $("#result").append(index + ": " + value + '<br>');
//     });

// Click Submit to add a new button
$("#add-comedian").on("click", function(event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    event.preventDefault();
    // This line will grab the text from the input box
    var comedian = $("#comedian-input").val().trim();
    // Input from the textbox added to array
    comedians.push(comedian);
    // Calling renderButtons which handles the processing of our comedian array
    renderButtons();  
  });
  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();

});
// Your app should take the topics in this array and create buttons in your HTML.

// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
$('#comedianButtons').on('click', "button", function() {

    // Empty gifs from container to clear display area
    $('#GIFArea').empty();

    var x = $(this).html();
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=" + apiKey + "&limit=10";
    console.log(queryURL);

    //AJAX API Call
    $.ajax({url:queryURL, method: 'GET'})
    .done(function(response){
        // console.log(response);

        // for loop to cycle through returned API objects
        for(var i=0; i<response.data.length; i++){

            var comedianDiv = $('<div>');

            //Appends rating as a <p> tag
            var p = $('<p>').text("Rating: "+response.data[i].rating);

            var comedianImage = $('<img>');

            //Attributing to img tag a fixed height url
            comedianImage.attr('src', response.data[i].images.fixed_height.url);

            comedianDiv.prepend(p);

            comedianDiv.prepend(comedianImage);

            $('#GIFArea').prepend(comedianDiv);
            //prepend rating to page
            // $('#GIFArea').prepend("<p>Rating: "+response.data[i].rating+"</p>");
            

            //prepend gifs to page
            // $('#GIFArea').prepend("<img src='"+response.data[i].images.downsized.url+"'>");
        }
    })
})




// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// Deploy your assignment to Github Pages.

// Rejoice! You just made something really cool.

// Minimum Requirements
// Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed.

// Bonus Goals
// Ensure your app is fully mobile responsive.

// Allow users to request additional gif's to be added to the page.

// Each request should ADD 10 gif's to the page, NOT overwrite the existing gifs.
// List additional metadata (title, tags, etc) for each gif in a clean and readable format.

// Include a 1-click download button for each gif, this should work across device types.

// Integrate this search with additional api's such as OMDB, or Bands in Town. Be creative and build something you are proud to showcae in your portfolio

// Allow users to add their favorite gif's to a favorites section.

// This should persist even when they select or add a new topic.
// If you are looking for a major challenge, look into making this section persist even when the page is reloaded(via localStorage or cookies).
// Create a README.md
// Add a README.md to your repository describing the project. Here are some resources for creating your README.md. Here are some resources to help you along the way:

// About READMEs

// Mastering Markdown

// Add To Your Portfolio
// After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

// One More Thing
// If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

// Good Luck!