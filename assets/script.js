var cityFormEl = document.querySelector("#city-form");
var cityNameEl = document.querySelector("#city-name");
var nameInputEl = document.querySelector("#cityname");
var cityContainerEl = document.querySelector("#city-container");
var citySearch = document.querySelector("#city-search");

var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var cityname = nameInputEl.value.trim();

  if (cityname) {
    getCityName(cityname);

    // clear old content
    cityContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("Search for a city or select from the following");
  }
};

var buttonClickHandler = function(event) {
  // get the language attribute from the clicked element
  var city = event.target.getAttribute("city-name");

  if (city) {
    getFeaturedCities(city);

    // clear old content
    cityContainerEl.textContent = "";
  }
};

var getCityName = function(city) {
  // make a get request to url
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={a5f0248fee7817e0ec325587c9e1160b}").then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayCities(data, city);
        });
      } else {
        alert('Error: City does not exist');
      }
    })
    .catch(function(error) {
      alert("City cannot be found");
    });
};

var getFeaturedCities = function(city) {

  // make a get request to url
  fetch("https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={a5f0248fee7817e0ec325587c9e1160b}").then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        displayCities(data.items, city);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  });
};

var displayRepos = function(repos, searchTerm) {
  // check if api returned any repos
  if (city.length === 0) {
    cityContainerEl.textContent = "No cites to display.";
    return;
  }

  citySearch.textContent = searchTerm;

    // append to container
    cityEl.appendChild(statusEl);

    // append container to the dom
    cityContainerEl.appendChild(repoEl);
  };

// add event listeners to form and button container
cityFormEl.addEventListener("submit", formSubmitHandler);
cityNameEl.addEventListener("click", buttonClickHandler);






















// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}

// https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={lat}&lon={lon}&dt={time}&appid={API key}