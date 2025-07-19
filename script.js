// Escape Room Check + Toast Popup
function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === "photosynthesis") {
    result.textContent = "🌿 Correct! You unlocked the greenhouse!";
    result.style.color = "#00ff00";
    showSuccessToast();
  } else {
    result.textContent = "❌ Wrong password. Hint: It's how plants eat sunlight.";
    result.style.color = "#ff4444";
  }
}

// Shows bottom-right congratulation popup
function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.add("show");

  // Hide the toast after 4 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Scroll to tribute list
function scrollToTeam() {
  const teamSection = document.getElementById("team");
  teamSection.classList.remove("hidden");
  teamSection.scrollIntoView({ behavior: "smooth" });
}

// Navigate to secret page
function openSecret() {
  window.location.href = "secret.html";
}

// Random Science Easter Egg
function showEggPopup() {
  const facts = [
    "🧠 Your brain uses 20% of your body's energy — even at rest!",
    "🌌 There are more stars in the universe than grains of sand on Earth.",
    "⚛️ You are made of stardust — literally!",
    "🔥 Lightning is 5x hotter than the surface of the sun.",
    "🐙 Octopuses have 3 hearts and blue blood!",
    "🚀 In space, no one can hear you scream — because there’s no air!",
    "🧬 DNA in your body could stretch from Earth to Pluto and back… 17 times."
  ];

  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  const popup = document.getElementById("egg-popup");

  popup.querySelector("p").innerHTML = `<strong>🎉 Easter Egg:</strong> ${randomFact}`;
  popup.classList.remove("hidden");
}

// Close popup
function hideEggPopup() {
  document.getElementById("egg-popup").classList.add("hidden");
}
