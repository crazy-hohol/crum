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

    if (Auth::check()) {
        $user = User::find(Auth::id());
//die(var_dump(Auth::id()));
        $projects = $user->projects;
        $tickets = [];
        foreach ($projects as $project) {
            $tickets = array_merge($tickets, $project->tasks->toArray());
        }
        return View::make(
            'main',
            [
                'tickets' => json_encode($tickets),
                'projects' => json_encode($projects->toArray()),
                'user' => json_encode($user->toArray()),
            ]
        );
    } else {
        return View::make('main', ['tickets' => '', 'projects' => '']);

    }

});

Route::controller('ticket', 'TicketController');
Route::controller('project', 'ProjectController');
Route::post('/registration-user', function() {
    $data = Input::all();
    $data['password'] = Hash::make($data['pass']);
    $user = User::create($data);
    return Response::json($user->id);
});
Route::post('/sign-in', function() {
    $data = Input::all();
    if (Auth::attempt(['login' => $data['login'], 'password' => $data['password']])) {
        $token = hash('sha256', Str::random(10), false);
        $dateFor = new \DateTime();
        $dateFor->modify('+6 day');
        $user = User::find(Auth::id());
        if (!$user->auth_token || (new \DateTime())->format('Y-m-d') > $user->auth_token_expire) {
            $user->auth_token = $token;
            $user->auth_token_expire = $dateFor->format('Y-m-d');
            $user->save();
        }
        return Response::json(
            [
                'status' => 'success',
                'data' => [
                    'token' => $user->auth_token,
                    'user' => Auth::user()->toArray()
                ]
            ]
        );
    }
});

Route::delete('/sign-out', function() {
    $user = User::find(Auth::id());
    $user->auth_token = null;
    $user->save();
    return Response::json(
        [
            'status' => 'success'
        ]
    );
});
