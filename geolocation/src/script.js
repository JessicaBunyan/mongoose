function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  var pLocation = document.getElementById("location");
  pLocation.innerHTML += latitude + ", " + longitude + "<br/>";
  console.log(position);
}

function displayError(err) {}

window.onload = function() {
  if (this.navigator.geolocation) {
    this.navigator.geolocation.getCurrentPosition(
      this.displayLocation,
      this.displayError
    );
  } else {
    alert("Sorry! Your browser does not support geolocation");
  }
};
