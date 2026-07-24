/**
 * EDMONTON - BUILT FOR GROWTH
 * Landing Page Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Requirement: Links should behave like links visually, but nothing should happen when clicked (no navigation/hash change)
  const allLinks = document.querySelectorAll('a[href="#"]');
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Explicitly do nothing per user preference
    });
  });

  // 2. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('active');
    });

    // Close drawer when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!mobileDrawer.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileDrawer.classList.remove('active');
      }
    });
  }
});
