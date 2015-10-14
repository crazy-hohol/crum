<?php
/**
 * Created by PhpStorm.
 * User: Artemm
 * Date: 27.06.15
 * Time: 16:53
 */


class ProjectController extends BaseController
{
    public function __construct()
    {
        $this->beforeFilter('token_auth');
    }

    public function getIndex()
    {
        if ($id = Input::get('id')) {
            $ticket = Project::find($id);
            if (!$ticket) {
                return Response::json([]);
            }
            return Response::json($ticket->toArray());
        } else {
            $tickets = Project::all();
            return Response::json($tickets->toArray());
        }
    }
}
