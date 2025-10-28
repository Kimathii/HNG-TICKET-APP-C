// Authentication Management
const Auth = {
  SESSION_KEY: 'ticketapp_session',
  
  isAuthenticated() {
    return !!localStorage.getItem(this.SESSION_KEY);
  },
  
  getUser() {
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },
  
  login(email, password) {
    if (email && password.length >= 6) {
      const userData = {
        email: email,
        token: Date.now().toString()
      };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(userData));
      Toast.success('Welcome back!');
      this.updateNavbar();
      return true;
    }
    Toast.error('Invalid email or password.');
    return false;
  },
  
  signup(email, password, confirmPassword) {
    if (password !== confirmPassword) {
      Toast.error('Passwords do not match.');
      return false;
    }
    if (password.length < 6) {
      Toast.error('Password must be at least 6 characters.');
      return false;
    }
    const userData = {
      email: email,
      token: Date.now().toString()
    };
    localStorage.setItem(this.SESSION_KEY, JSON.stringify(userData));
    Toast.success('Account created successfully!');
    this.updateNavbar();
    return true;
  },
  
  logout() {
    localStorage.removeItem(this.SESSION_KEY);
    Toast.info('Logged out successfully.');
    this.updateNavbar();
    navigateTo('landing');
  },
  
  updateNavbar() {
    const navLinks = document.getElementById('navLinks');
    if (!navLinks) return;
    
    if (this.isAuthenticated()) {
      navLinks.innerHTML = `
        <a href="#" onclick="navigateTo('dashboard'); return false;" class="nav-link">Dashboard</a>
        <a href="#" onclick="navigateTo('tickets'); return false;" class="nav-link">Tickets</a>
        <button onclick="Auth.logout()" class="btn-danger">Logout</button>
      `;
    } else {
      navLinks.innerHTML = `
        <a href="#" onclick="navigateTo('login'); return false;" class="nav-link">Login</a>
        <a href="#" onclick="navigateTo('signup'); return false;" class="btn-primary">Get Started</a>
      `;
    }
  },
  
  checkAuth() {
    const path = window.location.pathname;
    const protectedPages = ['dashboard', 'tickets'];
    const currentPage = path.split('/').pop().replace('.html', '');
    
    if (protectedPages.includes(currentPage) && !this.isAuthenticated()) {
      navigateTo('login');
      return false;
    }
    
    if ((currentPage === 'login' || currentPage === 'signup') && this.isAuthenticated()) {
      navigateTo('dashboard');
      return false;
    }
    
    return true;
  }
};