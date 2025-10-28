# TicketFlow 🎫

> A modern, lightweight ticket management system built with Twig and PHP

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://hng-ticket-app-c.onrender.com)
[![PHP](https://img.shields.io/badge/PHP-8.2-blue)](https://www.php.net/)
[![Twig](https://img.shields.io/badge/Twig-3.x-green)](https://twig.symfony.com/)

## 🌟 Overview

TicketFlow is an intuitive ticket management system designed for teams who value simplicity and efficiency. Built with Twig templating engine and vanilla PHP, it provides a clean, modern interface for managing tickets and workflows.

## ✨ Features

- **🎯 Easy to Use** - Intuitive interface that gets your team up and running in minutes
- **⚡ Lightning Fast** - Real-time updates and instant notifications keep everyone in sync
- **🔒 Secure & Reliable** - Your data is protected with industry-standard security measures
- **📱 Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **🎨 Modern UI** - Clean, professional design with smooth animations

## 🚀 Live Demo

Check out the live application: [https://hng-ticket-app-c.onrender.com](https://hng-ticket-app-c.onrender.com)

## 🛠️ Tech Stack

- **Backend**: PHP 8.2
- **Templating**: Twig 3.x
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Deployment**: Docker, Render
- **Version Control**: Git, GitHub

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- PHP 8.2 or higher
- Composer
- Git

## 🔧 Installation

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kimathii/HNG-TICKET-APP-C.git
   cd HNG-TICKET-APP-C
   ```

2. **Install dependencies**
   ```bash
   composer install
   ```

3. **Start the development server**
   ```bash
   php -S localhost:8000 -t public public/index.php
   ```

4. **Open your browser**
   Navigate to `http://localhost:8000`

## 🐳 Docker Deployment

The project includes a `Dockerfile` for easy deployment:

```dockerfile
FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY composer.json composer.lock ./
RUN composer install --no-dev --optimize-autoloader --no-scripts

# Copy application files
COPY . .

# Start server
CMD php -S 0.0.0.0:${PORT:-10000} public/index.php
```

### Build and Run

```bash
docker build -t ticketflow .
docker run -p 8000:10000 ticketflow
```

## 📁 Project Structure

```
HNG-TICKET-APP-C/
├── public/              # Public web root
│   ├── assets/         # Static assets
│   │   ├── css/       # Stylesheets
│   │   └── js/        # JavaScript files
│   └── index.php      # Application entry point
├── templates/          # Twig templates
│   ├── base.html.twig
│   ├── landing.html.twig
│   ├── login.html.twig
│   ├── signup.html.twig
│   ├── dashboard.html.twig
│   └── tickets.html.twig
├── vendor/            # Composer dependencies
├── composer.json      # PHP dependencies
├── Dockerfile         # Docker configuration
├── render.yaml        # Render deployment config
└── README.md          # Project documentation
```

## 🎨 Available Pages

- **Landing Page** (`/`) - Welcome page with feature highlights
- **Login** (`/login`) - User authentication
- **Sign Up** (`/signup`) - User registration
- **Dashboard** (`/dashboard`) - Main user dashboard
- **Tickets** (`/tickets`) - Ticket management interface

## 🌐 Deployment to Render

This project is configured for easy deployment to Render:

1. **Fork/Clone the repository** to your GitHub account

2. **Connect to Render**
   - Go to [Render Dashboard](https://dashboard.render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**
   - **Environment**: Docker
   - **Dockerfile Path**: `./Dockerfile`
   - **Branch**: main

4. **Set environment variables**
   - `APP_ENV=prod`
   - `APP_SECRET=<generate-random-string>`

5. **Deploy!**

The service will automatically deploy on every push to the main branch.

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `APP_ENV` | Application environment (prod/dev) | Yes |
| `APP_SECRET` | Secret key for security | Yes |
| `PORT` | Port number (auto-set by hosting) | No |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of the HNG Internship Stage 2C challenge.

## 👨‍💻 Author

**Kimathi**
- GitHub: [@Kimathii](https://github.com/Kimathii)

## 🙏 Acknowledgments

- Built as part of the [HNG Internship](https://hng.tech/) program
- Twig templating engine by Symfony
- Icons and design inspiration from modern web practices

## 📞 Support

If you have any questions or run into issues, please:
- Open an issue on GitHub
- Check the existing documentation
- Review closed issues for similar problems

---

**Made with ❤️(and tears😭) for HNG Internship Stage 2C. THIS TWIG, GOODBYE AND GOOD RIDDANCE 🖐🏾**
