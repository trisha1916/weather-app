const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {

  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  console.log (jsonObject);
  cityName.innerHTML = jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("here is the weather in your area");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous
    httpRequest.send();
}
$(document).ready(function(){
 var lat;
  var long;
  $.getJSON("https://freegeoip.net/json/",function(data2){
    lat=data2.latitude;
    long=data2.longitude;
    console.log(lat);
    console.log(long);
 //creating an api with the user's geolocation
  var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=b6e4d569d1718b07a44702443dd0ed77"


  //json call for the api
  $.getJSON(api, function(data) {
      var fTemp;
  var cTemp;
  var tempSwap = true;

   var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    $("#city").html(city);
    fTemp = (kTemp*(9/5)-459.67).toFixed(2);
    cTemp = (kTemp-273).toFixed(1);

    $("#api").html(api);
    $("#weatherType").html(weatherType);

    $("#fTemp").html(fTemp + "&#8457;");
    $("#fTemp").click(function(){
      if (tempSwap===false) {
        $("#fTemp").html(fTemp + "&#8457;");
        tempSwap=true;
      }
      else {
        $("#fTemp").html(cTemp + "&#8451;");
        tempSwap=false;
      }
    });


    $("#windSpeed").html(windSpeed + "m/sec");
 })

    if(fTemp>=100){
      $("container").css("background-image","url(https://s2.postimg.org/6ss6kyuhl/yamaha_yzf_r1-wallpaper-1024x768.jpg)");
    }
      else if(fTemp<90){
        $("container").css("background-image", "url(https://s2.postimg.org/lapdsz8y1/beyonce_knowles_2-wallpaper-1024x768.jpg)")
      }
      else if (fTemp>80){
       $("container").css("background-image", "url(https://s2.postimg.org/i54s2ennd/Beyonce_in_Jamaica.jpg)")
      }
      else if (fTemp<70){
       $("container").css("background-image", "url(https://s2.postimg.org/t4pzebr0p/golf_course_landscape-wallpaper-1024x768.jpg)")
      }
      else if (fTemp<60){
       $("container").css("background-image", "url()")
      }
       else if (fTemp<50){
       $("container").css("background-image", "url(https://s2.postimg.org/8xcjlpoax/rihanna_9-wallpaper-1024x768.jpg)")
      }
       else if (fTemp=37.40){
       $("container").css("background-image", url("https://s2.postimg.org/8xcjlpoax/rihanna_9-wallpaper-1024x768.jpg"))
      }
       else if (fTemp<30){
       $("container").css("background-image", "url(https://s2.postimg.org/nhtmgb6c9/white_snowy_road-wallpaper-1024x768.jpg)")
      }
       else if (fTemp<20){
       $("container").css("background-image", "url(https://s2.postimg.org/9a3xrntnd/rihanna_dior_sunglasses-wallpaper-1024x768.jpg)")
      }
       else if (fTemp<10){
       $("container").css("background-image", "url()")
      }
       else if (fTemp<0){
       $("container").css("background-image", "url(https://s2.postimg.org/r05mdaf49/snowy_cabin_mountains_winter-wallpaper-1024x768.jpg)")
      }
       else if (fTemp<-10){
         $("container").css("background-image", "url(https://s2.postimg.org/7v2d3i5l5/skiing-wallpaper-1024x768.jpg)")

       if (fTemp >= 100) {
          $(".container").css("background-image", "url(https://s2.postimg.org/6ss6kyuhl/yamaha_yzf_r1-wallpaper-1024x768.jpg)");
      } else if (fTemp > 90) {
          $(".container").css("background-image", "url(https://s2.postimg.org/lapdsz8y1/beyonce_knowles_2-wallpaper-1024x768.jpg)")
      } else if (fTemp > 80) {
          $(".container").css("background-image", "url(https://s2.postimg.org/i54s2ennd/Beyonce_in_Jamaica.jpg)")
      }
  };
  $.getJSON("https://freegeoip.net/json/",function(data2){
  console.log("1");
  console.log(data2);
      var lat = data2.latitude;
      var long = data2.longitude;
      var api = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=b6e4d569d1718b07a44702443dd0ed77";
          $.getJSON(api).done(function(data, dataOther){

               var fTemp;
               var cTemp;
               var tempSwap = true;

          });
  });

  });

});
