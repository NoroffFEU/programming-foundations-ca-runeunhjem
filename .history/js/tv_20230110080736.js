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
  currentVolume: 20, // Number
  adjustVolume: function(volume) {
    if(volume >= 0 && volume <= 100) {
        this.currentVolume = volume;
        console.log(`Volume is set to`)
    }
  }

};
