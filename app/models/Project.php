<?php
/**
 * Created by PhpStorm.
 * User: Artemm
 * Date: 27.06.15
 * Time: 16:54
 */


class Project extends Eloquent
{
    protected $guardet = ['id'];

    protected $fillable  = [
        'title', 'text', 'status', 'story'
    ];


    public function users()
    {
        return $this->belongsToMany('Users', 'users_projects');
    }

    public function tasks()
    {
        return $this->hasMany('Ticket');
    }

}