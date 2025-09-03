var response = prompt("Password?")

if (response === "I open at the close.") {
  alert("You shall proceed.")
}

else if (response === "No.") {
  alert("Crucio.");
  location.href="index.html";
}

else if (response === "ANVoid161 is not a gamer.") {
  alert("Am I a joke to you?");
  location.href="index.html";
}

else if (response === "I am Mr Gaspard.") {
  alert("Fine, only because you're my teacher.");
}

else if (response === "I am Hallebot God.") {
  alert("AVADA KEDAVRA!");
  location.href="index.html";
}
else if (response === "Again.") {
  alert("Restart the process.")
  location.href="secondsite.html"
}
else if (response === "The process."){
  alert("Please stop.")
location.href="secondsite.html"
}
else if (response === "Stop.") {
  alert("I am getting sick of you.")
location.href="secondsite.html"
}
else {
  alert("Try Again.")
  location.href="secondsite.html"
}