document.addEventListener("DOMContentLoaded", handlePageLoad);

function handlePageLoad() {
  const audioElement = document.getElementById("fishe-audio");
  if (!audioElement) {
    console.warn("😔 No audio element found");
    return;
  }

  prepareAudioPlayback(audioElement);
  startVolumeMonitor(audioElement);
}

function prepareAudioPlayback(audioElement) {
  audioElement.volume = 0.1;
  console.log("🎵 Romantic music playing ;O!. Enjoy");

  audioElement.play().catch(() => {
    console.log("NO MUSIC FOR YOU :C");
  });
}

function startVolumeMonitor(audioElement) {
  setInterval(() => {
    const volumePercent = audioElement.volume * 100;
    console.log(`🔊 Volume: ${volumePercent.toFixed(0)}%`);
  }, 1000);
}
