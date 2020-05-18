// Find the current time in hours
// returns a number between 0 and 23
let timeOfDay = new Date().getHours();
let greeting = "";

// Determine greeting depending on the time of day
// before noon say "Good morning!"
if (timeOfDay <12) {
  greeting = "Good Morning!"
} 
// after noon before 6pm say "Good afternoon!"
if (timeOfDay >= 12 && timeOfDay < 18) {
  greeting = "Good afternoon!"
}
// after 6pm say "Good evening!"
if (timeOfDay >= 18) {
  greeting = "Good evening!"
}

// *** You don't need to change anything below this ***
// Find the element for TeeDuhb's hello
let helloElement = document.getElementById("hello");

helloElement.innerHTML = greeting;