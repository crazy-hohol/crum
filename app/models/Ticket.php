<?php
/**
 * Created by PhpStorm.
 * User: Artem
 * Date: 20.12.2014
 * Time: 20:22
 */

class Ticket extends Eloquent
{
    protected $guardet = ['id'];

    protected $fillable  = [
        'title', 'text', 'status', 'story'
    ];


    public function project()
    {
        return $this->belongsTo('Project');
    }
} 