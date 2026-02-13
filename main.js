const typewriterEl = document.getElementById('typewriter-text');
const heartEl = document.getElementById('heart-display');

async function type(text, element, speed = 60) {
  for (let char of text) {
    element.innerHTML += char;
    await new Promise(r => setTimeout(r, speed + Math.random() * 40));
  }
}

async function startExperience() {
  document.getElementById('scene-1').classList.remove('active');
  setTimeout(() => {
    document.getElementById('scene-2').classList.add('active');
    runConfession();
  }, 500);
}

async function runConfession() {
  await new Promise(r => setTimeout(r, 800));
  await type("I let the silence get too loud.", typewriterEl);
  typewriterEl.innerHTML += "<br><br>";
  await new Promise(r => setTimeout(r, 1000));
  await type("Every day I didn't call was a brick in a wall I never meant to build...", typewriterEl);

  setTimeout(() => {
    document.getElementById('rewind-trigger').style.display = 'block';
  }, 1000);
}

function triggerRewind() {
  document.body.classList.add('glitch');
  setTimeout(() => {
    document.body.classList.remove('glitch');
    document.getElementById('scene-2').classList.remove('active');
    document.getElementById('scene-3').classList.add('active');
    animateHeart();
  }, 400);
}

const heartFrames = [
    "   ( )   ( )\n    (     )\n     (   )\n      ( )", 
    "  * * * *\n * * * *\n  * ** *\n   * *\n    * *\n      * *\n        *",
    "      @@@@@@       @@@@@@\n    @@@@@@@@@@   @@@@@@@@@@\n  @@@@@@@@@@@@@@ @@@@@@@@@@@@@@\n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n    @@@@@@@@@@@@@@@@@@@@@@@@@@\n      @@@@@@@@@@@@@@@@@@@@@@\n        @@@@@@@@@@@@@@@@@@\n          @@@@@@@@@@@@@@\n            @@@@@@@@@@\n              @@@@@@\n                @@\n                @"
];

async function animateHeart() {
  for (let frame of heartFrames) {
    heartEl.innerText = frame;
    await new Promise(r => setTimeout(r, 1200));
  }
  document.getElementById('final-ask').style.opacity = '1';
  setTimeout(() => {
    document.getElementById('secret-note-trigger').style.opacity = '1';
  }, 2000);
}

function openNote() {
  document.getElementById('overlay-note').style.display = 'flex';
}

function closeNote() {
  document.getElementById('overlay-note').style.display = 'none';
}