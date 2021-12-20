const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bodyTag = document.querySelector("body");

//bodyTag.style.width = "100%";
//bodyTag.style.height = "100%";
bodyTag.style.backgroundImage = `url(img/${chosenImage})`;
