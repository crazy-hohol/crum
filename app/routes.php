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
    return Response::json($ticket->id);
});
Route::post('/sign-in', function() {
    $data = Input::all();
    if (Auth::attempt(['login' => $data['login'], 'password' => $data['password']])) {
        $token = hash('sha256', Str::random(10), false);
        $user = User::find(Auth::id());
        $user->auth_token = $token;
        $user->save();
        return Response::json(
            ['token' => $token] + (array)Auth::user()
        );
    }
});
