// Puzzle options
const puzzles = [
  { password: "chlorophyll", hint: "It's the green engine behind photosynthesis." },
  { password: "gravity", hint: "What keeps your feet on the ground?" },
  { password: "neuron", hint: "This fires signals inside your brain." },
  { password: "fusion", hint: "How stars generate their energy." },
  { password: "refraction", hint: "Why a straw looks bent in water." }
];

// Science facts for popup
const facts = [
  "Your brain uses 20% of your body's energy — even at rest.",
  "There are more stars in the universe than grains of sand on Earth.",
  "You are made of stardust — literally.",
  "Lightning is hotter than the surface of the sun.",
  "Octopuses have 3 hearts and blue blood.",
  "In space, there’s no sound — no air means no noise.",
  "DNA in your body could stretch from Earth to Pluto and back… 17 times."
];

let currentAnswer = "";
let currentHint = "";

window.onload = function () {
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  currentAnswer = puzzle.password;
  currentHint = puzzle.hint;
  document.getElementById("puzzle-hint").textContent = "Hint: " + currentHint;
};

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === currentAnswer) {
    result.textContent = "Correct! You have found easter egg number 2!";
    result.style.color = "#00aa00";
    showSuccessToast();
  } else if (input === "easter egg 3") {
    window.location.href = "easter3.html";
  } else {
    result.textContent = "Incorrect password. Try again.";
    result.style.color = "#cc0000";
  }
}

function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

function showEggPopup() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const popup = document.getElementById("egg-popup");
  document.getElementById("egg-text").innerHTML = `${fact} <br><em>(Click to explore further)</em>`;
  popup.classList.remove("hidden");
}

function hideEggPopup() {
  document.getElementById("egg-popup").classList.add("hidden");
}

function goToTeam() {
  window.location.href = "team.html";
}

function goToEaster1() {
  window.location.href = "easter1.html";
}

function goToEgg2() {
  window.location.href = "easter2.html";
}

function triggerGlitch() {
  const glitchText = document.getElementById("glitch-trigger");
  glitchText.classList.add("glitch-active");

  setTimeout(() => {
    window.location.href = "easter3.html";
  }, 2500);
}
