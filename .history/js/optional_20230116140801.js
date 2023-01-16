// ****************** OPTIONAL *************************
// INPUT BUTTONS:
var tvButton = document.querySelector("#tv");
var pcButton = document.querySelector("#pc");
var ps5Button = document.querySelector("#ps5");
var chromecastButton = document.querySelector("#chromecast");
// APP BUTTONS:
var netflixButton = document.querySelector("#netflix");
var disneyButton = document.querySelector("#disney");
var viaplayButton = document.querySelector("#viaplay");
var hboButton = document.querySelector("#hbo");
var discoveryButton = document.querySelector("#discovery");
var tv2Button = document.querySelector("#tv2");
var youtubeButton = document.querySelector("#youtube");
var spotifyButton = document.querySelector("#spotify");
// CONTROL BUTTONS:
var powerButton = document.querySelector("#power");
var volUpButton = document.querySelector("#volume-up");
var volDownButton = document.querySelector("#volume-down");
var hdrButton = document.querySelector("#hdr");
// TV SCREEN:
var tv__inside = document.querySelector(".tv__inside");
var activeLogo = document.querySelector("#active-logo");


// ALTERNATE TV POWER ON/OFF
powerButton.onclick = function alternatePower() {
  resetButtonBackgroundColor();
  if (tv.tvIsOn === true) {
    console.log("The TV is on - Turning it off");
    tv.tvIsOn = false;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "red";
    tv__inside.style.backgroundColor = "#000";
    tv__inside.innerHTML = "";
  } else {
    console.log("The TV is off - Turning it on");
    tv.tvIsOn = true;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "green";
    tv__inside.style.backgroundColor = "darkgrey";
    tv__inside.innerHTML = "What do you want to watch?";
  }
};

// SET PROPERTIES FOR EACH BUTTON
tvButton.onclick = function () {
  resetButtonBackgroundColor();
  tvButton.style.backgroundColor = "#CDCDCD";
  tvButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#2991F1";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "NRK 1";
  activeLogo.innerHTML = '<img src="images/nrk-logo-vector.svg" alt="Aktiv Logo">';
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "TV";
  console.log("After ===>", tv.activeTvSource);
};

pcButton.onclick = function () {
  resetButtonBackgroundColor();
  pcButton.style.backgroundColor = "#CDCDCD";
  pcButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#F1D129";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "PC";
  activeLogo.innerHTML = `<img src="images/laptop_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "PC";
  console.log("After ===>", tv.activeTvSource);
};

ps5Button.onclick = function () {
  resetButtonBackgroundColor();
  ps5Button.style.backgroundColor = "#CDCDCD";
  ps5Button.style.color = "#000";
  tv__inside.style.backgroundColor = "#2D4A84";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "Playstation 5";
  activeLogo.innerHTML = `<img src="images/ps-white_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Playstation 5";
  console.log("After ===>", tv.activeTvSource);
};

chromecastButton.onclick = function () {
  resetButtonBackgroundColor();
  chromecastButton.style.backgroundColor = "#CDCDCD";
  chromecastButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FA5640";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "Chromecast";
  activeLogo.innerHTML = `<img src="images/chromecast_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Chromecast";
  console.log("After ===>", tv.activeTvSource);
};

netflixButton.onclick = function () {
  resetButtonBackgroundColor();
  netflixButton.style.backgroundColor = "#CDCDCD";
  netflixButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FFD9D9";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "Netflix";
  activeLogo.innerHTML = `<img src="images/netflix-logo_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Netflix";
  console.log("After ===>", tv.activeTvSource);
};

disneyButton.onclick = function () {
  resetButtonBackgroundColor();
  disneyButton.style.backgroundColor = "#CDCDCD";
  disneyButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#D9E6FF";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "Disney+";
  activeLogo.innerHTML = `<img src="images/disney+_logo.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Disney";
  console.log("After ===>", tv.activeTvSource);
};

viaplayButton.onclick = function () {
  resetButtonBackgroundColor();
  viaplayButton.style.backgroundColor = "#CDCDCD";
  viaplayButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FFFCED";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "Viaplay";
  activeLogo.innerHTML = `<img src="images/viaplay_logo.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Viaplay";
  console.log("After ===>", tv.activeTvSource);
};

hboButton.onclick = function () {
  resetButtonBackgroundColor();
  hboButton.style.backgroundColor = "#CDCDCD";
  hboButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#C788F1";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "HBO Max";
  activeLogo.innerHTML = `<img src="images/HBO_logo.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "HBO Max";
  console.log("After ===>", tv.activeTvSource);
};

discoveryButton.onclick = function () {
  resetButtonBackgroundColor();
  discoveryButton.style.backgroundColor = "#CDCDCD";
  discoveryButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#C788F1";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "discovery+";
  activeLogo.innerHTML = `<img src="images/Discovery_plus_ico.svg" alt="Active Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "discovery+";
  console.log("After ===>", tv.activeTvSource);
};