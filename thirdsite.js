var response = prompt("Password?")

if (response === "I open at the close.") {
  alert("You shall proceed.")
}

else if (response === "No.") {
  alert("Crucio.");
  location.href="index.html";
}

else {
  alert("Try Again.")
  location.href="secondsite.html"
}