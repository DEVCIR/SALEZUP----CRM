<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSalesAgentsTable extends Migration
{
    public function up()
    {
        Schema::create('sales_agents', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('surname');
            $table->unsignedBigInteger('team_id');
            $table->string('teamleader');
            $table->string('commission');
            $table->string('target');
            $table->string('frequency');
            $table->string('campaign');
            $table->enum('active', ['Yes', 'No'])->default('No');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sales_agents');
    }
}