// Puzzle and hint logic (runs when DOM is ready)
document.addEventListener("DOMContentLoaded", function () {
  const puzzle = puzzles[Math.floor(Math.random() * puzzles.length)];
  currentAnswer = puzzle.password;
  currentHint = puzzle.hint;

  const hintEl = document.getElementById("puzzle-hint");
  if (hintEl) {
    hintEl.textContent = "Hint: " + currentHint;
  }

  const glitchText = document.getElementById("glitch-trigger");
  if (glitchText) {
    glitchText.addEventListener("mouseenter", () => {
      hoverTimer = setTimeout(() => {
        document.getElementById("egg3-input").classList.add("show");
      }, 3000);
    });

    glitchText.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
    });
  }
});

// -----------------------------
// GLOBAL VARIABLES & ARRAYS
// -----------------------------

const puzzles = [
  { password: "chlorophyll", hint: "It's the green engine behind photosynthesis." },
  { password: "gravity", hint: "What keeps your feet on the ground?" },
  { password: "neuron", hint: "This fires signals inside your brain." },
  { password: "fusion", hint: "How stars generate their energy." },
  { password: "refraction", hint: "Why a straw looks bent in water." }
];

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
let hoverTimer;

// -----------------------------
// FUNCTION DEFINITIONS
// -----------------------------

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === currentAnswer) {
    result.textContent = "You found easter egg number 2!";
    result.style.color = "#00aa00";
    showSuccessToast();
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
  document.getElementById("egg-text").innerHTML = fact + " (Hint: Try clicking again...)";
  popup.classList.remove("hidden");

  popup.onclick = () => {
    window.location.href = "easter1.html";
  };
}

function revealDot() {
  document.getElementById("egg2").classList.add("visible");
}

function promptRiddle() {
  const answer = prompt("What has no mass, but occupies space?");
  if (answer && answer.toLowerCase().includes("vacuum")) {
    const second = prompt("Now, what's between protons in an atom?");
    if (second && second.toLowerCase().includes("empty")) {
      window.location.href = "easter2.html";
    } else {
      alert("Close, but not quite. Think emptiness.");
    }
  } else {
    alert("Incorrect. Hint: It's not air.");
  }
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

function checkEgg3(event) {
  if (event.key === "Enter") {
    const val = event.target.value.toLowerCase();
    if (val.includes("easter egg 3")) {
      window.location.href = "easter3.html";
    } else {
      alert("Try again. Hint: It's an Easter egg.");
    }
  }
}

function showEgg3Input() {
  document.getElementById("egg3-input").classList.add("show");
}
