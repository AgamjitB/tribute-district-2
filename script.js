// 🔁 Puzzle options (password + hint)
const puzzles = [
  { password: "chlorophyll", hint: "It's the green engine behind photosynthesis." },
  { password: "gravity", hint: "What keeps your feet on the ground?" },
  { password: "neuron", hint: "This fires signals inside your brain." },
  { password: "fusion", hint: "How stars generate their energy." },
  { password: "refraction", hint: "Why a straw looks bent in water." }
];

// 🎁 Science facts for Easter Egg popup
const facts = [
  "🧠 Your brain uses 20% of your body's energy — even at rest!",
  "🌌 There are more stars in the universe than grains of sand on Earth.",
  "⚛️ You are made of stardust — literally!",
  "🔥 Lightning is 5x hotter than the surface of the sun.",
  "🐙 Octopuses have 3 hearts and blue blood!",
  "🚀 In space, no one can hear you scream — because there’s no air!",
  "🧬 DNA in your body could stretch from Earth to Pluto and back… 17 times."
];

let currentAnswer = "";
let currentHint = "";

// Initialize puzzle on page load
window.onload = function () {
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  currentAnswer = puzzle.password;
  currentHint = puzzle.hint;
  document.getElementById("puzzle-hint").textContent = "Hint: " + currentHint;
};

// Check user input for puzzle
function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === currentAnswer) {
    result.textContent = "🌿 Correct! You unlocked the greenhouse!";
    result.style.color = "#00ff00";
    showSuccessToast();
  } else if (input === "element-x") {
    // Easter egg #3 secret keyword
    window.location.href = "easter3.html";
  } else {
    result.textContent = "❌ Wrong password. Try again.";
    result.style.color = "#ff4444";
  }
}

// Show success toast notification
function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Show Easter Egg popup with a random fact
function showEggPopup() {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  const popup = document.getElementById("egg-popup");
  document.getElementById("egg-text").innerHTML = `<strong>🎉 Easter Egg:</strong> ${fact}<br><em>(Click to reveal something!)</em>`;
  popup.classList.remove("hidden");
}

// Hide Easter Egg popup
function hideEggPopup() {
  document.getElementById("egg-popup").classList.add("hidden");
}

// Navigate to Team page
function goToTeam() {
  window.location.href = "team.html";
}

// Navigate to Easter Egg 1 page
function goToEaster1() {
  window.location.href = "easter1.html";
}

// Navigate to Easter Egg 2 page (hidden dot)
function goToEgg2() {
  window.location.href = "easter2.html";
}

// Trigger glitch animation and redirect (for glitchy word)
function triggerGlitch() {
  const glitchText = document.getElementById("glitch-trigger");
  glitchText.classList.add("glitch-active");

  setTimeout(() => {
    window.location.href = "easter3.html";
  }, 2500);
}
