// **********
var tv = {
  // The real life object
  brand: "Samsung", // String
  displayType: "QLED", // String
  screenSize: 65, // Number
  resolution: "4K", // String
  hdrSupport: true, // Boolean
  smartTv: true, // Boolean
  availableInputs: ["TV (Decoder)", "PC", "Playstation 5", "Chromecast"], // Array
  availableApps: [
    "Netflix",
    "Disney",
    "Viaplay",
    "discovery+",
    "HBO Max",
    "TV2 Play",
    "Amazon Prime",
    "YouTube",
    "Spotify",
  ], // Array
  currentVolume: 40, // Number
  adjustVolume: function (volume) {
    // Function to adjust the volume
    if (volume >= 0 && volume <= 100) {
      this.currentVolume = volume; // The this keyword will set currentVolume to whatever the adjustVolume("VALUE") value is when calling this function
      console.log(`Volumelevel is now set to ${volume}`);
    } else {
      console.log("Volume level is out of range and invalid");
    }
  }, // End of adjustVolume
  changeInput: function (input) {
    // Function to change the active TV input
    if (this.availableInputs.includes(input)) {
      console.log(`Changing input to ${input}`);
    } else {
      console.log("This input does not exist on this TV");
    }
  }, // End of changeInput
  changeApps: function (apps) {
    // Function to switch to built inn app in the TV
    if (this.availableApps.includes(apps)) {
      console.log(`Switching to the ${apps} App`);
    } else {
      console.log(
        "This app is not installed on this TV. Please download and install to use it"
      );
    }
  }, // End of changeApps
}; // **** End of tv object ****
tv.adjustVolume(70); // adjust currentVolume to 70 (REMEMBER that adjustVolume is a property of tv)
tv.adjustVolume(101); // adjust currentVolume to 101 wich is not within the 0 and 100 required in the if(volume...
console.log("Doublecheck", tv.currentVolume); // Doublecheck currentVolume
tv.changeInput("pc"); // Does not exist due to lowerCaps (remember tv. first)
tv.changeInput("PC"); // Does exist (remember tv. first)
tv.changeApps("Youtube"); // Does not exist due to lowerCaps (remember tv. first)
tv.changeApps("YouTube"); // Does exist (remember tv. first)
tv.changeApps("HBO Max"); // Does exist (remember tv. first)

