// Define variables
let balloon = document.getElementById('balloon');
let currentSize = 30;
let increment = 15;

// Event listener
document.addEventListener("keyup", inflation);

function removeListener() {
  document.removeEventListener("keyup", inflation);
}

function replaceBalloon(text) {
  balloon.innerText = text;
}

function setSize(size) {
  balloon.style.fontSize = size + 'px';
}

function inflation(event) 
{
// Grow balloon
  if (event.keyCode === 38) 
  {
    currentSize += increment;
    setSize(currentSize);
    if (currentSize >= 60) 
    {
        replaceBalloon("💥");
        removeListener();
    }
  } 
// Shrink balloon
  else if (event.keyCode === 40) 
  {
    currentSize -= increment;
    setSize(currentSize);
    if (currentSize <= 0) 
    {
      replaceBalloon("DONE!");
      setSize(30);
      removeListener();
    }
  }
}
