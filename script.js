function revealEgg1() {
  document.getElementById("egg1").classList.remove("hidden");
}

function revealEgg2() {
  document.getElementById("egg2").classList.remove("hidden");
}

function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === "photosynthesis") {
    result.textContent = "🌿 Correct! You unlocked the greenhouse!";
    result.style.color = "#00ff00";
  } else {
    result.textContent = "❌ Wrong password. Hint: It's how plants eat sunlight.";
    result.style.color = "#ff4444";
  }
}

function scrollToTeam() {
  document.getElementById("team").scrollIntoView({ behavior: "smooth" });
}

function openSecret() {
  window.location.href = "secret.html";
}

function showEggPopup() {
  document.getElementById("egg-popup").classList.remove("hidden");
}

function hideEggPopup() {
  document.getElementById("egg-popup").classList.add("hidden");
}
