const memes = ["2.jpg", "3.jpeg", "download.jpg"];
function displayRandomMeme() {
  const randomIndex = Math.floor(Math.random() * memes.length);
  const randomMemeUrl = memes[randomIndex];
  const memeImg = document.getElementById("memeImg");
  memeImg.src = randomMemeUrl;
}
window.addEventListener("load", displayRandomMeme);

