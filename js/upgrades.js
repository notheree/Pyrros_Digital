const toggle = document.getElementById('themeToggle');
const animateBtn = document.getElementById('animate');

// Initialize theme from localStorage
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
  toggle.textContent = '☀️ Light Mode';
} else {
  toggle.textContent = '🌙 Dark Mode';
}

toggle?.addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Sun burst animation on animate button click
animateBtn?.addEventListener('click', (e) => {
  const rect = animateBtn.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  // Create 5 suns in different directions
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const sunBurst = document.createElement('div');
      sunBurst.className = 'sun-burst';
      sunBurst.style.left = centerX + 'px';
      sunBurst.style.top = centerY + 'px';
      document.body.appendChild(sunBurst);
      
      // Remove element after animation completes
      setTimeout(() => sunBurst.remove(), 800);
    }, i * 100);
  }
});

// Money animation trigger
const moneyElements = document.querySelectorAll('.money');
moneyElements.forEach(el => {
  el.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
      this.style.animation = 'moneyPulse 0.6s ease-in-out';
    }, 10);
  });
});

// Auto-trigger animation on price elements when page loads
window.addEventListener('load', () => {
  moneyElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.animation = 'moneyPulse 0.6s ease-in-out';
    }, index * 150);
  });
});