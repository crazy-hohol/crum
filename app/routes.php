<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
Route::filter('auth.basic.once', function()
{
    return Auth::onceBasic();
});

Route::get('/', function() {
    $tickets = Ticket::all();
	return View::make('main', ['tickets' => json_encode($tickets->toArray())]);
});

Route::controller('ticket', 'TicketController');
Route::controller('project', 'ProjectController');
Route::post('/registration-user', function() {
    $data = Input::all();
    $data['password'] = Hash::make($data['pass']);
    $ticket = User::create($data);
    return Reponse::json($ticket->id);
});
Route::post('/sign-in', function() {
    $data = Input::all();
    if (Response::json(Auth::attempt($data['login'], $data['password']))) {
        $token = hash('sha256', Str::random(10), false);
        return Response::json($token);
    }
});
