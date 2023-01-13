// ********** My real life object here will be my TV **********

var tv = {
  // Using var as that is the one used in the modules
  // The real life object's properties:
  brand: "Samsung", // String
  displayType: "QLED", // String
  screenSize: 65, // Number
  resolution: "4K", // String
  hdrSupport: true, // Boolean
  smartTv: true, // Boolean
  tvIsOn: true, // Boolean
  availableInputs: ["TV (Decoder)", "PC", "Playstation 5", "Chromecast"], // Array
  availableApps: [
    "Netflix",
    "Disney",
    "Viaplay",
    "HBO Max",
    "discovery+",
    "TV2 Play",
    "YouTube",
    "Spotify",
  ], // Array
  currentVolume: 40, // Number

  // ***** Function to adjust the volume: *****
  adjustVolume: function (volume) { // Functions within an object are also called methods
    if (volume >= 0 && volume <= 100) {
      this.currentVolume = volume; // The this keyword will set currentVolume to whatever the adjustVolume("VALUE") value is when calling this function
      console.log(`Volumelevel is now set to ${volume}`);
    } else {
      console.log("Volume level is out of range and invalid");
    }
  }, // End of adjustVolume

  // ***** Function to change the active TV input: *****
  changeInput: function (input) { // Functions within an object are also called methods
    // if (tv.availableInputs.includes(input)) { // ****** CAN BE WRITTEN AS tv.availableInputs.includes ***********
    if (this.availableInputs.includes(input)) { // ****** The this keyword points to property's parent (tv) ***********
      console.log(`Changing input to ${input}`);
    } else {
      console.log("This input does not exist on this TV");
    }
  }, // End of changeInput

  // ***** Function to switch to built inn app in the TV: *****
  changeApps: function (apps) { // Functions within an object are also called methods
    // if (tv.availableApps.includes(apps)) { // ****** CAN BE WRITTEN AS tv.availableApps.includes ***********
    if (this.availableApps.includes(apps)) { // ****** The this keyword points to property's parent (tv)  ***********
      console.log(`Switching to the ${apps} App`);
    } else {
      console.log(
        "This app is not installed on this TV. Please download and install to use it"
      );
    }
  }, // End of changeApps and the LAST of the tv object's properties
  power: function () {
    if(this.tvIsOn === true) {
      console.log("The TV is on");
      var tvIsOn = true;
      console.log(tvIsOn);
      powerButton.style.backgroundColor = "green";
    } else {
      console.log("The TV is off");
      var tvIsOn = false;
      console.log(tvIsOn);
      powerButton.style.backgroundColor = "red";
    }    
  }
}; // **** End of tv object ****

// Running the functions to check if they work as they should in the console:
tv.adjustVolume(70); // adjust currentVolume to 70 (REMEMBER that adjustVolume is a property of tv)
tv.adjustVolume(101); // adjust currentVolume to 101 wich is not within the 0 and 100 required in the if(volume...
console.log("Doublecheck", tv.currentVolume); // Doublecheck currentVolume
tv.changeInput("pc"); // Does not exist due to lowerCaps (remember tv. first)
tv.changeInput("PC"); // Does exist (remember tv. first)
tv.changeApps("Youtube"); // Does not exist due to lowerCaps (remember tv. first)
tv.changeApps("YouTube"); // Does exist (remember tv. first)
tv.changeApps("HBO Max"); // Does exist (remember tv. first)

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

powerButton.onclick =  function alternatePower() {
  if(tv.tvIsOn === true) {
    console.log("The TV is on - Turning it off");
    tv.tvIsOn = false;
    console.log(tv.tvIsOn)
    powerButton.style.backgroundColor = "red";
    tv__inside.style.backgroundColor = ""
  } else {
    console.log("The TV is off - Turning it on");
    tv.tvIsOn = true;
    console.log(tv.tvIsOn)
    powerButton.style.backgroundColor = "green";
  }
  // console.log(tv.tvIsOn);
}

// powerButton.onclick = tv.alternatePower();

// tv.power()
