<?php


require_once __DIR__ . '/vendor/autoload.php';

//use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

$app = new Silex\Application();
$app['debug'] = true;

$app->register(new Silex\Provider\DoctrineServiceProvider(), [
    'dbname'   => 'crum',
    'host'     => 'localhost',
    'user'     => 'crum',
    'password' => '64423kt',
]);
$app->register(new Silex\Provider\TwigServiceProvider(), [
    'twig.path' => __DIR__ . '/views'
]);

$app->get("/", function() use($app) {
   return $app['twig']->render('main.twig');
});

$app->get("/tickets", function() use($app) {
    $query = $app['db']->query("SELECT * FROM ticket WHERE dropped = 0");
    return json_encode($query->fetchAll());
});

$app->get("/tickets/{id}", function($id) use($app) {
    $query = $app['db']->prepare("SELECT * FROM ticket WHERE dropped = 0 AND id = :id");
    $query->execute(['id' => (int)$id]);
    return json_encode($query->fetchAll());
});

$app->post("/tickets", function(Request $request) use($app) {
    $app['db']->insert('ticket', json_decode($request->getContent()));
    $query = $app['db']->query("SELECT * FROM ticket WHERE dropped = 0 AND id = LAST_INSERT_ID()");
    return json_encode($query->fetchAll());
});

$app->run();