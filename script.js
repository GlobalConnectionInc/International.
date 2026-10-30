const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const note = document.getElementById('form-note');
  note.textContent = 'Thank you. The enquiry form is a front-end demo and must be connected to your email or CRM before the website goes live.';
});
