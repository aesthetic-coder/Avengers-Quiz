var head = document.getElementById("result-header");
var body = document.getElementById("result-body");

function reset() {
  location.href = "./index.html";
}

var points = sessionStorage.getItem("points");

if (points >= 5) {
  head.innerText = "That's nice ! You've got " + points + " out of 6 right";
  body.innerText =
    "You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!!!";
} else {
  head.innerText = "Oops! You've got only " + points + " out of 6 right";
  body.innerText =
    "Marvel have created more avengers than even the geekiest of geeks could remember, but that doesn't mean you shouldn't try.";
}
