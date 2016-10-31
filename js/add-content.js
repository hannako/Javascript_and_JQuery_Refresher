var time = new Date();
var greeting;

if (time.getHours() > 12) {
  greeting = "Good Afternoon";
}
else {
  greeting = "Good Morning";
}

var words = document.getElementById('greeting');
words.textContent = greeting;
