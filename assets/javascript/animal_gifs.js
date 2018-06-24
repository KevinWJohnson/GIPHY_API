$(document).ready(function () {

    //Global Variables
    var addTopic = "";




    // Array for Starting Buttons Animals
    var topics = [
        "dog",
        "cat",
        "rabbit",
        "hamster",
        "skunk",
        "goldfish",
        "bird",
        "ferret",
        "turtle",
        "sugar glider",
        "chinchilla",
        "hedgehog",
        "hermit crab",
        "gerbil",
        "pygmy goat",
        "chicken",
        "capybara",
        "teacup pig",
        "serval",
        "salamander",
        "frog"
    ];


    // Create Starting Animal Buttons
    createButtons();

    // Click Handlers
    $("#addAnimal").on("click", function (event) {

        //Prevents the page from reloading on form submit
        event.preventDefault();

        $("#animalButtons").empty();

        addTopic = $("#animal-input").val().trim();

        //var addTopic = $("animal-input").val();
        console.log(addTopic);
        //var addTopic = document.getElementById("animal-form").value;

        // Adding topic to array
        topics.push(addTopic);

        // Create Starting Animal Buttons
        createButtons();



    });










    // Create Starting Animal Buttons
    createButtons();


    //
    //API Key for GIPHY API Assignment
    //
    //   lJ43akIhk3DTBBHT3hg2kXg062zG48xm
    //
    // Example code from GiPHY.com - how they need the requests
    //javascript, jQuery
    // var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
    // xhr.done(function (data) { console.log("success got data", data); });

    // Requesting the data from giphy.com
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=teacup pig&rating=g&api_key=lJ43akIhk3DTBBHT3hg2kXg062zG48xm&limit=10");

    // After data comes back from the API
    xhr.done(function (response) {

        console.log("success got data", response);

        // Storing array of results in the results variable
        var results = response.data;

        // Looping over every result item
        //for (var i = 0; i < results.length; i++) {

        // }






    });

    // Creating Animal Buttons

    function createButtons() {

        $("#animalButtons").empty();

        for (var i = 0; i < topics.length; i++) {

            var animalBtn = $("<button type='button'>" + topics[i] + "</button>");

            // Appending the button to the animalButtons div
            $("div[id='animalButtons']").append(animalBtn)
        }
    }

});