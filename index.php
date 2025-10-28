<?php
// Serve static files directly
if (preg_match('/\.(?:css|js|png|jpg|jpeg|gif|svg)$/', $_SERVER["REQUEST_URI"])) {
    return false;  // Let PHP serve the static file
}

require_once __DIR__ . '/../vendor/autoload.php';
// ... rest of the code
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Set up Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false, // Disable cache for development
    'debug' => true,
]);

// Get the requested path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// Route mapping
$routes = [
    '/' => 'landing.html.twig',
    '/landing' => 'landing.html.twig',
    '/landing.html' => 'landing.html.twig',
    '/login' => 'login.html.twig',
    '/login.html' => 'login.html.twig',
    '/signup' => 'signup.html.twig',
    '/signup.html' => 'signup.html.twig',
    '/dashboard' => 'dashboard.html.twig',
    '/dashboard.html' => 'dashboard.html.twig',
    '/tickets' => 'tickets.html.twig',
    '/tickets.html' => 'tickets.html.twig',
];

// Find template
$template = $routes[$path] ?? null;

if ($template) {
    try {
        echo $twig->render($template);
    } catch (Exception $e) {
        http_response_code(500);
        echo "Error rendering template: " . $e->getMessage();
    }
} else {
    http_response_code(404);
    echo $twig->render('landing.html.twig'); // Fallback to landing
}