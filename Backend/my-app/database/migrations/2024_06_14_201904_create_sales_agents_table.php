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
            $table->integer('team_id');
            $table->string('manager');
            $table->string('commission');
            $table->string('target');
            $table->string('target_value');
            $table->string('frequency');
            $table->string('campaign');
            $table->dateTime('start_date');
            $table->string('active')->default('No');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sales_agents');
    }
}
