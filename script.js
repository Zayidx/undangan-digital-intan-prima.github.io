const gate = document.getElementById('gate');
const openBtn = document.getElementById('openInvite');
const content = document.getElementById('content');

function openInvitation(){
  gate.classList.add('open');
  content.classList.add('show');
  setTimeout(() => document.querySelector('.hero')?.scrollIntoView({behavior:'smooth'}), 700);
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
