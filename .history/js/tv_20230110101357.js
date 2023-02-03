var tv = { // The real life object
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
  ], // Array
  currentVolume: 40, // Number
  adjustVolume: function(volume) { // Function to adjust the volume
    if(volume >= 0 && volume <= 100) {
        this.currentVolume = volume; // The this keyword will set currentVolume to whatever the adjustVolume("VALUE") value is when calling this function
        console.log(`Volume is set to ${volume}`);
    } else {
        console.log("Volume level is out of range and invalid");
    }
  }, // End of adjustVolume
  changeInput: function(input) { // Function to change the active TV input    
    if(this.availableInputs.includes(input)) {
        console.log(`Changing input to ${input}`);
    } else {
        console.log();
    }

  },

};
// tv.adjustVolume(70); // adjust currentVolume to 70
console.log("Doublecheck", tv.currentVolume); // Doublecheck currentVolume
