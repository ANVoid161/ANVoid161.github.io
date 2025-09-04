var response = prompt("Give me something of importance, then you shall pass.")

if (response === "I open at the close.") {
  alert("You shall proceed.")
}

else if (response === "No") {
  alert("Then get out of my sight.");
  location.href="index.html";
}

else if (response === "ANVoid161 is not a gamer") {
  alert("Am I a joke to you?");
  location.href="index.html";
}

else if (response === "I am Mr Gaspard") {
  alert("Fine, only because you're my teacher.");
}

else if (response === "I am Hallebot God") {
  alert("You should not be here. BEGONE!");
  location.href="index.html";
}
else if (response === "I am Aiden") {
  alert("Ah, long time no see!")
}
else if (response === "Duster") {
  alert("My favorite band. Love listening to their music. Come in.")
}
else if (response === "Katy Perry") {
  alert("No, I'm not listening to their music.")
  location.href="secondsite.html"
}
else if (response === "Draco dormiens nunquam titillandus") {
  alert("Hm, a wise quote. You may enter.")
}
else if (response === ""){
  alert("At least say something...")
  location.href="thirdsite.html"
}
else if (response === "I open at the close") {
  alert("You shall proceed.")
}
else {
  alert("Try Again.")
}