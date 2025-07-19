// Handle puzzle input answers
function checkAnswer() {
  const input = document.getElementById("answer").value.toLowerCase();
  const result = document.getElementById("result");

  if (input === "photosynthesis") {
    result.textContent = "🌿 Correct! You unlocked the greenhouse!";
    result.style.color = "#00ff00";
    showSuccessToast();
  } else if (input === "element-x") {
    // Easter egg #3 — secret keyword
    window.location.href = "easter3.html";
  } else {
    result.textContent = "❌ Wrong password. Hint: It's how plants eat sunlight.";
    result.style.color = "#ff4444";
  }
}

// Show bottom-right success toast
function showSuccessToast() {
  const toast = document.getElementById("success-toast");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 4000);
}

// Show popup Easter egg
function showEggPopup() {
  const popup = document.getElementById("egg-popup");
  popup.classList.remove("hidden");
}

// Redirect when clicking popup
function goToEaster1() {
  window.location.href = "easter1.html";
}

// Redirect to Team Page
function goToTeam() {
  window.location.href = "team.html";
}

// Easter Egg #2 - Hidden dot
function goToEgg2() {
  window.location.href = "easter2.html";
}
