<?php
// Check if it's a static file request
$uri = $_SERVER['REQUEST_URI'];
$path = parse_url($uri, PHP_URL_PATH);

// Serve static files directly
if (preg_match('/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/i', $path)) {
    // Get the file path relative to public directory
    $file = __DIR__ . $path;
    
    if (file_exists($file)) {
        // Set appropriate content type
        $mime_types = [
            'css' => 'text/css',
            'js' => 'application/javascript',
            'png' => 'image/png',
            'jpg' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'gif' => 'image/gif',
            'svg' => 'image/svg+xml',
            'ico' => 'image/x-icon',
            'woff' => 'font/woff',
            'woff2' => 'font/woff2',
            'ttf' => 'font/ttf',
            'eot' => 'application/vnd.ms-fontobject'
        ];
        
        $ext = strtolower(pathinfo($file, PATHINFO_EXTENSION));
        $content_type = $mime_types[$ext] ?? 'application/octet-stream';
        
        header('Content-Type: ' . $content_type);
        readfile($file);
        exit;
    } else {
        http_response_code(404);
        echo "File not found";
        exit;
    }
}

// For non-static requests, use Twig
require_once __DIR__ . '/../vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Set up Twig
$loader = new FilesystemLoader(__DIR__ . '/../templates');
$twig = new Environment($loader, [
    'cache' => false,
    'debug' => true,
]);

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
        echo $twig->render('landing.html.twig');
    }
} catch (Exception $e) {
    http_response_code(500);
    echo "Error: " . $e->getMessage();
}