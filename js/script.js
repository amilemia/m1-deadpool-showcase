// Toggle mobile navigation
const toggleButton = document.getElementById('hamburger-toggle');
const mobileNav = document.getElementById('mobile-nav');
toggleButton.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    // Toggle button text for UX
    if(mobileNav.classList.contains('active')) {
        toggleButton.textContent = '×';
        toggleButton.setAttribute('aria-label', 'Close navigation menu');
    } else {
        toggleButton.textContent = '☰';
        toggleButton.setAttribute('aria-label', 'Open navigation menu');
    }
});
// Close mobile nav automatically when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-nav nav ul li a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        toggleButton.textContent = '☰';
        toggleButton.setAttribute('aria-label', 'Open navigation menu');
    });
});
// Transitions are now handled via CSS for a smoother experience
