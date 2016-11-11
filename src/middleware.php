<?php
// Application middleware
use Psr\Http\Message\RequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

$app->add(function (Request $request, Response $response, callable $next) {
    $renderer = $this->get('renderer');
    $response = $renderer->render($response, '../templates/header.phtml', ['currentPath' => $request->getUri()->getPath()]);
    $response = $next($request, $response);
    $response = $renderer->render($response, '../templates/footer.phtml');

    return $response;
});
