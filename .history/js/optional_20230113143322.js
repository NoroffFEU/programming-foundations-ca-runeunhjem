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
var iframe__src = document.querySelector("#iframe");

// ALTERNATE TV POWER ON/OFF
powerButton.onclick =  function alternatePower() {
  if(tv.tvIsOn === true) {
    console.log("The TV is on - Turning it off");
    tv.tvIsOn = false;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "red";
    tv__inside.style.backgroundColor = "#111";
    tv__inside.innerHTML = "";
  } else {
    console.log("The TV is off - Turning it on");
    tv.tvIsOn = true;
    console.log(tv.tvIsOn);
    powerButton.style.backgroundColor = "green";
    tv__inside.style.backgroundColor = "darkgrey";
    tv__inside.innerHTML = "What do you want to watch?";
  }
}

tvButton.onclick = function color() {
  tvButton.style.backgroundColor = "#CDCDCD";
  tvButton.style.color = "#000";
  tv__inside.src.innerHTML = "https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik";
  console.log(iframe);
}
// tvButton.onclick = function activeButton() {
//   if (tv.activeTvSource === "TV") {
//     console.log("[Before setting activeButton]:", tv.activeButton);
//     tv.activeButton = "#tv";
//     tvButton.style.backgroundColor = "#CDCDCD";
//   } else if (tv.activeTvSource === "PC") {
//     console.log("[Before setting activeButton]:", tv.activeButton);
//     tv.activeButton = "#pc";
//     pcButton.style.backgroundColor = "#CDCDCD";
//   }
// }

// var pcButton = document.querySelector("#pc");
// var ps5Button = document.querySelector("#ps5");
// var chromecastButton = document.querySelector("#chromecast");
