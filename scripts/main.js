document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("fishe-audio");
  if (audio) {
    audio.volume = 0.1; // Set volume to 10%
  } else {
    console.warn("Audio element not found");
  }
});
