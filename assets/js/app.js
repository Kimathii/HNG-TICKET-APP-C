// Global Navigation and Initialization
function navigateTo(page) {
  // In a real Twig setup with Symfony, you'd use proper routing
  // For static setup, we simulate navigation
  window.location.href = `/${page}.html`;
}

function navigateHome() {
  const isAuth = Auth.isAuthenticated();
  navigateTo(isAuth ? 'dashboard' : 'landing');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Update navbar based on auth state
  Auth.updateNavbar();
  
  // Check authentication for protected pages
  Auth.checkAuth();
});