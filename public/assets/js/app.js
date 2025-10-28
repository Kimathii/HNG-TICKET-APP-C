// Global Navigation and Initialization
function navigateTo(page) {
  // Navigate to Twig routes (no .html extension needed)
  window.location.href = `/${page}`;
}

function navigateHome() {
  const isAuth = Auth.isAuthenticated();
  navigateTo(isAuth ? 'dashboard' : 'landing');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Update navbar based on auth state
  if (typeof Auth !== 'undefined') {
    Auth.updateNavbar();
    // Check authentication for protected pages
    Auth.checkAuth();
  }
});