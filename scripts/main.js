document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("fishe-audio");

  if (audio) {
    audio.volume = 0.1; // Set initial volume to 10%
    console.log("🎵 Romantic music playing ;O!. Enjoy"); 
    audio.play().catch(() => console.log("Can't auto-play audio, user needs to click 😅"));
  } else {
    console.warn("😔 No Fishe Audio element found (NO MUSIC :C)");
  }

 setInterval(() => {
    const volumePercent = audio.volume * 100;
    console.log(`🔊 Current audio volume: ${volumePercent.toFixed(0)}%`);
  }, 1000);
});