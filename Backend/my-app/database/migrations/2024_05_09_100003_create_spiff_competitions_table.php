<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSpiffCompetitionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('spiff_competitions', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('prize');
            $table->string('team');
            $table->integer('point');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->integer('duration');
            $table->integer('prize_value');
            $table->string('winner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('spiff_competitions');
    }
}
