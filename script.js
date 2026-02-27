// AOS Initialization
AOS.init({
  duration: 900,
  once: true,
  easing: 'ease-out-back',
  offset: 100,
  mirror: false,
  disable: 'mobile'   // মোবাইলে অ্যানিমেশন বন্ধ (performance-এর জন্য)
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to top button
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Optional: Contact form simple demo alert (real backend-এর জন্য পরিবর্তন করবে)
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('ধন্যবাদ! তোমার মেসেজ পাঠানো হয়েছে। (এটা ডেমো অ্যালার্ট)');
    this.reset();
  });
}