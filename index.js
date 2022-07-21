var len = document.querySelectorAll(".drum").length;

for (var i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener(
    "click",
    function () {
      this.style.color = "white";
      //       setTimeout(function () {
      //   this.style.color = "white";
      // }, 1000);
      makeSound(this.innerHTML);
      btnanimate(this.innerHTML);
    }

    // var audio = new Audio("/sounds/" + "arr[i]" + ".mp3");
  );
}
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  btnanimate(event.key);
});
function makeSound(k) {
  if (k === "w") {
    var tom1 = new Audio("/DrumKit/sounds/tom-1.mp3");
    tom1.play();
  } else if (k === "a") {
    var tom2 = new Audio("/DrumKit/sounds/tom-2.mp3");
    tom2.play();
  } else if (k === "s") {
    var tom3 = new Audio("/DrumKit/sounds/tom-3.mp3");
    tom3.play();
  } else if (k === "d") {
    var tom4 = new Audio("/DrumKit/sounds/tom-4.mp3");
    tom4.play();
  } else if (k === "j") {
    var tom5 = new Audio("/DrumKit/sounds/crash.mp3");
    tom5.play();
  } else if (k === "k") {
    var tom6 = new Audio("/DrumKit/sounds/kick-bass.mp3");
    tom6.play();
  } else if (k === "l") {
    var tom7 = new Audio("/DrumKit/sounds/snare.mp3");
    tom7.play();
  } else {
    console.log("invalid Key");
  }
}

function btnanimate(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}
