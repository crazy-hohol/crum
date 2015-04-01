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

Route::get('/', function()
{
    $tickets = Ticket::all();
	return View::make('main', ['tickets' => json_encode($tickets->toArray())]);
});

Route::controller('ticket', 'TicketController');
