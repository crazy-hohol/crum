<?php
/**
 * Created by PhpStorm.
 * User: Artem
 * Date: 20.12.2014
 * Time: 20:23
 */

class TicketController extends BaseController
{
    public function __construct()
    {
        $this->beforeFilter('token_auth');
    }


    public function postIndex()
    {
        $ticket = Ticket::create(Input::all());
        return Response::json(['id' => $ticket->id]);
    }

    public function getIndex()
    {
        if ($id = Input::get('id')) {
            $ticket = Ticket::find($id);
            if (!$ticket) {
                return Response::json([]);
            }
            return Response::json($ticket->toArray());
        } else {
            $tickets = Ticket::all();
            return Response::json($tickets->toArray());
        }
    }

    public function putIndex()
    {
        $data = Input::all();
        $ticket = Ticket::find($data['id']);
        foreach (array_diff_assoc($data, $ticket->toArray()) as $key => $val) {
            $ticket->{$key} = $val;
        }
        $ticket->save();
        return Response::json($ticket->toArray());

    }

    public function deleteIndex()
    {
        $id = Input::get('id');
        if ($ticket = Ticket::find($id)) {
            $ticket->status = 0;
            $ticket->save();
            return Response::json($id);
        }
    }
}