const gate = document.getElementById('gate');
const openBtn = document.getElementById('openInvite');
const content = document.getElementById('content');
const schoolHeader = document.querySelector('.school-header');
const countdownDays = document.getElementById('countdownDays');
const countdownHours = document.getElementById('countdownHours');
const countdownMinutes = document.getElementById('countdownMinutes');
const countdownSeconds = document.getElementById('countdownSeconds');
const countdownCaption = document.getElementById('countdownCaption');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

const eventDate = new Date('2026-06-21T08:30:00+07:00');
let musicShouldPlay = true;

function padNumber(value){
  return String(value).padStart(2, '0');
}

function updateCountdown(){
  if(!countdownDays || !countdownHours || !countdownMinutes || !countdownSeconds) return;

  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if(diff <= 0){
    countdownDays.textContent = '00';
    countdownHours.textContent = '00';
    countdownMinutes.textContent = '00';
    countdownSeconds.textContent = '00';
    if(countdownCaption) countdownCaption.textContent = 'Hari acara telah tiba';
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  countdownDays.textContent = padNumber(days);
  countdownHours.textContent = padNumber(hours);
  countdownMinutes.textContent = padNumber(minutes);
  countdownSeconds.textContent = padNumber(seconds);
}

function syncMusicButton(isPlaying){
  if(!musicToggle) return;
  musicToggle.classList.toggle('playing', isPlaying);
  musicToggle.setAttribute('aria-pressed', String(isPlaying));
  musicToggle.setAttribute('aria-label', isPlaying ? 'Hentikan musik' : 'Putar musik');
}

async function startMusic(){
  if(!bgMusic || !musicShouldPlay) return;

  try{
    await bgMusic.play();
    syncMusicButton(true);
  }catch(err){
    syncMusicButton(false);
  }
}

function stopMusic(){
  if(!bgMusic) return;
  bgMusic.pause();
  syncMusicButton(false);
}

function openInvitation(){
  gate.classList.add('open');
  content.classList.add('show');
  startMusic();
  setTimeout(() => {
    window.AOS?.refreshHard();
    schoolHeader?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 700);
}
openBtn.addEventListener('click', openInvitation);

gate.addEventListener('keydown', (e) => {
  if(e.key === 'Enter' || e.key === ' ') openInvitation();
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: .16});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

updateCountdown();
setInterval(updateCountdown, 1000);

musicToggle?.addEventListener('click', async () => {
  if(!bgMusic) return;

  if(bgMusic.paused){
    musicShouldPlay = true;
    await startMusic();
  }else{
    musicShouldPlay = false;
    stopMusic();
  }
});

window.addEventListener('load', () => {
  startMusic();
});
