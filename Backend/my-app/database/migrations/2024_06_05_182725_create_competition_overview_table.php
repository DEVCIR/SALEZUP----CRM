<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompetitionOverviewTable extends Migration
{
    public function up()
    {
        Schema::create('competition_overview', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('prize');
            $table->string('prize_value');
            $table->string('point');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->string('duration');
            $table->string('winner')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('competition_overview');
    }
}
