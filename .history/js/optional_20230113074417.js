powerButton.onclick =  function power() {
  if(this.tvIsOn === true) {
    console.log("The TV is on - Turning it off");
    var tvIsOn = false;
    console.log(tvIsOn)
    powerButton.style.backgroundColor = "green";
  } else {
    console.log("The TV is off - Turning it on");
    var tvIsOn = true;
    console.log(tvIsOn)
    powerButton.style.backgroundColor = "red";
  }
  