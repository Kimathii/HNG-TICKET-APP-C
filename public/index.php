<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Set up Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false,
    'debug' => true,
]);

// Get the requested path
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);

// Route mapping
$routes = [
    '/' => 'landing.html.twig',
    '/index.php' => 'landing.html.twig',
    '/landing' => 'landing.html.twig',
    '/login' => 'login.html.twig',
    '/signup' => 'signup.html.twig',
    '/dashboard' => 'dashboard.html.twig',
    '/tickets' => 'tickets.html.twig',
];

// Find template
$template = $routes[$path] ?? null;

try {
    if ($template) {
        echo $twig->render($template);
    } else {
        // Default to landing
        echo $twig->render('landing.html.twig');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo "Error: " . $e->getMessage();
}