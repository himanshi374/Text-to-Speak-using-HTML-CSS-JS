const text = document.getElementById("text");
const speak = document.getElementById("speak");

const speakText = () => {
  const utterance = new SpeechSynthesisUtterance(text.value);
  speechSynthesis.speak(utterance);
};

speak.addEventListener("click", speakText);