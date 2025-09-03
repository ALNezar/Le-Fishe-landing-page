document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("fishe-audio");
  if (audio) {
    audio.volume = 0.1; // Set volume to 10%
  } else {
    console.warn("le Fishe Audio element not found 😔");
  }
});
 const max = 57 ;
 const actual = max - 7 ;
 const percentage = actual / max ;
 console.log (percentage);
