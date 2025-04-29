const words = ["Web Developer ", "Welcome Buddy ", "Let's Code!", "  Awesome!"];
let wordIndex = 0;
let charIndex = 0;
let typingSpeed = 150; // speed of typing
let erasingSpeed = 0; // speed of deleting
let delayBetweenWords = 2000; // delay before typing next word
const textElement = document.getElementById("text");

function type() {
  if (charIndex < words[wordIndex].length) {
    textElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenWords);
  }
}

function erase() {
  if (charIndex > 0) {
    textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) wordIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000); // start after 1 second
});


//dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
      
        darkModeToggle.addEventListener('click', function() {
          document.body.classList.toggle('dark-mode');
        });


//script by other kids

// When the user scrolls down 20px from the top, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var movetop = document.getElementById("movetop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    movetop.style.display = "block";
  } else {
    movetop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

