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
var tv__frame = document.querySelector(".tv__frame");
var iframe = document.createElement("iframe");

// ALTERNATE TV POWER ON/OFF
powerButton.onclick = function alternatePower() {
  resetSourceBackground();
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

// ALTERNATE TV HDR ON/OFF

hdrButton.onclick = function alternateHdr() {
  resetButtonBackgroundColor();
  if(!tv.tvIsOn) {
    powerButton.style.backgroundColor = "red";
    console.log("Turn on the TV first");
  } else if (tv.hdrIsOn === true) {
    console.log("HDR is on - Turning it off");
    tv.hdrIsOn = false;
    console.log(tv.hdrIsOn);
    hdrButton.style.backgroundColor = "red";
    tv__frame.style.opacity = "0.8";
  } else {
    console.log("HDR is off - Turning it on");
    tv.hdrIsOn = true;
    console.log(tv.hdrIsOn);
    hdrButton.style.backgroundColor = "green";
    tv__frame.style.opacity = "100%";
  }
};

// FUNCTION TO ADJUST VOLUME FROM REMOTE AND SEE IT ON TV
function adjustVolume(volume) {
  if(!tv.tvIsOn) { // VOLUME should not work when TV is powered off
    console.log("Turn on the TV first");
  } else if (volume >= 0 && volume <= 100) {
    currentVolume = volume; // Update current volume
    console.log(`Volume level is now set to ${volume}`);
    document.getElementById("show-console-log").innerHTML = `Volume level is now set to ${volume}`;
    document.getElementById("show-console-log").style.backgroundColor = "#2227";
    setTimeout(() => { // Testing with arrow function
      document.getElementById("show-console-log").innerHTML = "";
      document.getElementById("show-console-log").style.backgroundColor = "#2220";
    }, 5000);
  } else {
    console.log("Volume level is out of range and invalid");
    document.getElementById("show-console-log").innerHTML = "Volume level is out of range and invalid";
    setTimeout(function () { // SAME as arrow function in setTimeout over here
    document.getElementById("show-console-log").innerHTML = "";
  }, 5000);}
}

// SET PROPERTIES FOR EACH SOURCE BUTTON
tvButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/nrk-image.jpg);");
  tvButton.style.backgroundColor = "#CDCDCD";
  tvButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#F17D29";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML =
    '<img src="images/nrk-logo-vector.svg" alt="Aktiv Logo">';
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "TV";
  console.log("After ===>", tv.activeTvSource);
};

pcButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/pc-image.jpg);");
  pcButton.style.backgroundColor = "#CDCDCD";
  pcButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#F1D129";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/laptop_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "PC";
  console.log("After ===>", tv.activeTvSource);
};

ps5Button.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/ps5-image.jpg);");
  ps5Button.style.backgroundColor = "#CDCDCD";
  ps5Button.style.color = "#000";
  tv__inside.style.backgroundColor = "#2D4A84";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/ps-white_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Playstation 5";
  console.log("After ===>", tv.activeTvSource);
};

chromecastButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/chromecast-image.jpg);");
  chromecastButton.style.backgroundColor = "#CDCDCD";
  chromecastButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FA5640";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "Start casting";
  activeLogo.innerHTML = `<img src="images/chromecast_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Chromecast";
  console.log("After ===>", tv.activeTvSource);
};

netflixButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/netflix-image.jpg);");
  netflixButton.style.backgroundColor = "#CDCDCD";
  netflixButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FFD9D9";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";  
  activeLogo.innerHTML = `<img src="images/netflix-logo_icon.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Netflix";
  console.log("After ===>", tv.activeTvSource);
};

disneyButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/disney-image.jpg);");
  disneyButton.style.backgroundColor = "#CDCDCD";
  disneyButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#D9E6FF";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/disney+_logo.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Disney";
  console.log("After ===>", tv.activeTvSource);
};

viaplayButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/viaplay-image.jpg);");
  viaplayButton.style.backgroundColor = "#CDCDCD";
  viaplayButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FFFCED";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/viaplay_logo.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Viaplay";
  console.log("After ===>", tv.activeTvSource);
};

hboButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/hbo-image.jpg);");
  hboButton.style.backgroundColor = "#CDCDCD";
  hboButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#C788F1";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/hbo-logo-wht.svg" alt="Aktiv Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "HBO Max";
  console.log("After ===>", tv.activeTvSource);
};

discoveryButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/discovery-image.jpg);");
  discoveryButton.style.backgroundColor = "#CDCDCD";
  discoveryButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#FAA05F";
  tv__inside.style.color = "#000";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/Discovery_plus_ico.svg" alt="Active Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "discovery+";
  console.log("After ===>", tv.activeTvSource);
};

tv2Button.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/tv2-image.jpg);");
  tv2Button.style.backgroundColor = "#CDCDCD";
  tv2Button.style.color = "#000";
  tv__inside.style.backgroundColor = "#5D29F1";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/TV2-white-2021.svg" alt="Active Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "TV2 Play";
  console.log("After ===>", tv.activeTvSource);
};

youtubeButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  var iframe = document.createElement("iframe");
  document.getElementById("innet_").innerHTML = "<iframe width="704" height="396" src="https://www.youtube.com/embed/mMFvrBsB_uM" title="LAUGHING BABY Videos Will Make You LAUGH too! - Funny Laughing Babies Compilation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>";
  // document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/youtube-image.jpg);");
  youtubeButton.style.backgroundColor = "#CDCDCD";
  youtubeButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#1A3C5B";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/YouTube_dark_logo_2017.svg" alt="Active Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "YouTube";
  console.log("After ===>", tv.activeTvSource);
};

spotifyButton.onclick = function () {
  resetButtonBackgroundColor();
  tv.tvIsOn = true;
  document.getElementById("tv__inside").setAttribute("style","background-image: url(../images/tvbg/spotify-image.jpg);");
  spotifyButton.style.backgroundColor = "#CDCDCD";
  spotifyButton.style.color = "#000";
  tv__inside.style.backgroundColor = "#067A0A";
  tv__inside.style.color = "#FFF";
  tv__inside.innerHTML = "";
  activeLogo.innerHTML = `<img src="images/Spotify_icon.svg" alt="Active Logo"></div>`;
  console.log("Before ===>", tv.activeTvSource);
  tv.activeTvSource = "Spotify";
  console.log("After ===>", tv.activeTvSource);
};
