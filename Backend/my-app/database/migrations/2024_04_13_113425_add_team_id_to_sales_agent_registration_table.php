<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTeamIdToSalesAgentRegistrationTable extends Migration
{
    public function up()
    {
        Schema::table('sales_agent_registration', function (Blueprint $table) {
            $table->unsignedBigInteger('team_id')->nullable()->after('password'); // Adding the new column
            
        });
    }

    public function down()
    {
        Schema::table('sales_agent_registration', function (Blueprint $table) {
            $table->dropColumn('team_id'); // Dropping the added column
        });
    }
}
