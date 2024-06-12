<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStartDateToSalesAgentsTable extends Migration
{
    public function up()
    {
        Schema::table('sales_agents', function (Blueprint $table) {
            $table->string('start_date')->after('campaign'); // Add the new column
        });
    }

    public function down()
    {
        Schema::table('sales_agents', function (Blueprint $table) {
            $table->dropColumn('start_date'); // Remove the column if the migration is rolled back
        });
    }
}
