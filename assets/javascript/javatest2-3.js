// function GetMarvelHero(){
//   var $marvelinfo= $("<ul>");
//   $marvelinfo.addClass("list-group");
//   $("#marvelinfo").append($marvelinfo);
//   console.log("lll")
//   var marvelName = data.data.results[0].name;
//   $("#marvelinfo").append("<h2>"+ marvelName + "</h2>");
//   var $heroinfoItem= $("<li class='list-group-item articleHeadline'>");
// }


$("#run-search").on("click", function (event) {

var heroname = $("#search-term").val();

    $.ajax({    
      method: "POST",
      url: "https://mighty-brook-95893.herokuapp.com/cors/marvel2",
      data: {
        "url": "https://gateway.marvel.com:443/v1/public/characters?name=" + heroname +"&",
        "key": "efd92cf6cc5e7649916c4e73939e6281"
      }
  }).then(function (data){
    var marvelName = data.data.results[0].name;
    console.log(data.data.results[0].name)
    var marvelDes = data.data.results[0].description;
    console.log(data.data.results[0].description)
    var marvelImage = data.data.results[0].thumbnail;
    console.log(data.data.results[0].thumbnail)
    var marvelComic = data.data.results[0].comics;
    console.log( data.data.results[0].comics)

    $(".card-title").html(marvelName);
    console.log("mki")
    $(".card-text").html(marvelDes);
    $(".card-text2").html(marvelComic);
    $(".card-img-top").attr(marvelImage);
    var $marvelinfo= $("<ul>");
    $marvelinfo.addClass("list-group");
    $("#marvelinfo").append($marvelinfo);
    console.log("lll")
    var marvelName = data.data.results[0].name;
    $("#marvelinfo").append("<h2>"+ marvelName + "</h2>");

    // Printing the entire object to console
    console.log("ook", data);
    console.log("pk", data.data.results[0].name);

// var marvelName = $("<h1>").text(data.data.results[0].name);
// var marvelDes = $("<h1>").text(data.results.description);
// var marvelImage = $("<img>").attr("src", data.results.thumbnail);
// var marvelComics = $("<h2>").text(data.results.comics);

  });
 });

 $("#run-search").on("click", function (event) {

  // event.preventDefault() can be used to prevent an event's default behavior.
  // Here, it prevents the submit button from trying to submit a form when clicked
  event.preventDefault();

  // Here we grab the text from the input box
  var movie = $("#search-term").val();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    $("#searchdump").text(JSON.stringify());


    // Creating a div to hold the movie
    var movieDiv = $("<div class='movie'>");

    // Storing the rating data
    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var holdrating = $("<h1>").html("Rating: " + rating);

    // Displaying the rating
    movieDiv.append(holdrating);

    // var scoring = response.Ratings[1];

    // Storing the release year
    var released = response.Released;

    // Creating an element to hold the release year
    var holdyear = $("<p>").text("Released: " + released);

    // Displaying the release year
    movieDiv.append(holdyear);

    // Storing the plot
    var plot = response.Plot;

    // Creating an element to hold the plot
    var holdplot = $("<p>").text("Plot: " + plot);

    // Appending the plot
    movieDiv.append(holdplot);

    // Storing the title
    var title = response.Title;

    // Creating an element to hold the title
    var holdtitle = $("<p>").text("Title: " + title);

    // Appending the title
    movieDiv.append(holdtitle);

    // Retrieving the URL for the image
    var imgURL = response.Poster;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", imgURL);

    // Appending the image
    movieDiv.append(image);

    //an array to hold all the variables I want printed
    var display = [image, title, released, rating, plot];

    //printing it
    $("#searchdump").html(display);
    // $("#movieTitle").text(JSON.stringify(response.Title));
    console.log(display);

  });
});