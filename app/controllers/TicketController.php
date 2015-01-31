<?php
/**
 * Created by PhpStorm.
 * User: Artem
 * Date: 20.12.2014
 * Time: 20:23
 */

class TicketController extends BaseController
{
    public function postIndex()
    {
        //die(var_dump(Input::all()));
        $ticket = Ticket::create(Input::all());
        //$ticket->save();
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