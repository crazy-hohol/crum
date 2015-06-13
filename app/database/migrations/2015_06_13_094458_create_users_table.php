<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{

        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('login', 50)->unique();
            $table->string('password', 200);
            $table->string('name', 200);
        });

        Schema::create('projects', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 200);
            $table->string('description', 1000);
            $table->string('who_add', 50);
        });

        Schema::create('users_projects', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id')->insigned();
            $table->foreign('user_id')->references('id')->on('users');

            $table->integer('project_id')->insigned();
            $table->foreign('project_id')->references('id')->on('projects');
        });

        Schema::table('tickets', function(Blueprint $table)
        {
            $table->integer('project_id')->unsigned();
            $table->foreign('project_id')->references('id')->on('projects');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		//
	}

}
