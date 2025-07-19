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

function scrollToTeam() {
  const teamSection = document.getElementById("team");
  teamSection.classList.remove("hidden");
  teamSection.scrollIntoView({ behavior: "smooth" });
}

function openSecret() {
  window.location.href = "secret.html";
}

function showEggPopup() {
  const popup = document.getElementById("egg-popup");
  popup.classList.remove("hidden");
}

function hideEggPopup() {
  const popup = document.getElementById("egg-popup");
  popup.classList.add("hidden");
}

function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.remove("hidden");

  // Hide the toast after 4 seconds
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}
