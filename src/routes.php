<?php
// Routes

$app->get('/', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/' route");
    // Render index view
    return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/about', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/about' route");

    // Render index view
    return $this->renderer->render($response, 'about.phtml', $args);
});

$app->get('/services', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/services' route");

    // Render index view
    return $this->renderer->render($response, 'services.phtml', $args);
});

$app->get('/contacts', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/contacts' route");

    // Render index view
    return $this->renderer->render($response, 'contacts.phtml', $args);
});

$app->get('/feedback', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("Slim-Skeleton '/feedback' route");

    $messages = $this->flash->getMessages();

    // Render index view
    return $this->renderer->render($response, 'feedback.phtml', ['messages' => $messages]);
});

$app->post('/send', function ($request, $response, $args) use ($app) {

    $results = mail('filatovaem92@gmail.com', 'My Subject', 'Test mail from lex');

    $this->flash->addMessage('result', $results);
    return $response->withStatus(302)->withRedirect('/feedback');
});
