<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompetitionTeamTable extends Migration
{
    public function up()
    {
        Schema::create('competition_team', function (Blueprint $table) {
            $table->increments('competition_team_id');
            $table->integer('competition_id');
            $table->integer('team_id');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('competition_team');
    }
}
