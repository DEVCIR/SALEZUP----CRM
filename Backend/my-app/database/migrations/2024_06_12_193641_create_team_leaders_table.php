<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTeamLeadersTable extends Migration
{
    public function up()
    {
        Schema::create('team_leaders', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->string('start_date');
            $table->integer('team_id');
            $table->string('manager');
            $table->string('commission');
            $table->string('target');
            $table->string('frequency');
            $table->string('campaign');
            $table->string('active')->default('pending');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('team_leaders');
    }
}
