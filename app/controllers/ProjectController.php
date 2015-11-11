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
//        die(var_dump(Auth::id()));
        if ($id = Input::get('id')) {
            $project = Project::find($id);
            if (!$project) {
                return Response::json([]);
            }
            return Response::json($project->toArray());
        } else {
            $user = User::find(Auth::id());
            $projects = $user->projects;
            return Response::json($projects->toArray());
        }
    }


    public function postIndex()
    {

    }
}
