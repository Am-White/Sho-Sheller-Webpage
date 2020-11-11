//Activates Carousel
$('#myCarousel').on('slid.bs.carousel', function (e) {
    $('#myCarousel').carousel('2')
  })


  var searchAreaEl = $('#searchArea');

  var cocktailEl = $('#cocktails');

  var searchButtonEl = $('#searchBtn');


  searchButtonEl.on("click", function (event) {
    event.preventDefault();

  
   
    var search = searchAreaEl.val();

    var apiKey = "1";
    
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita" + search + "cocktail-name" + apiKey;



    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (json) {
      // console.log(response);

      for (i = 0; i < search.length; i++) {

        var article = json.response.docs[i].headline.main;
        var webUrl = json.response.docs[i].web_url;
        // console.log(article);
        // console.log(webUrl);
    

       $('.articles').append("<a href='" +webUrl + "'>" + article + "</a>");
      
       $('.articles').append('<p>');
        
      }

    });

  });