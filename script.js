AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-out-back'
});

// Back to top button logic (যদি থাকে)
const topBtn = document.getElementById('back-to-top');
if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.style.opacity = window.scrollY > 400 ? '1' : '0';
    topBtn.style.visibility = window.scrollY > 400 ? 'visible' : 'hidden';
  });
  topBtn.onclick = () => window.scrollTo({top:0, behavior:'smooth'});
}