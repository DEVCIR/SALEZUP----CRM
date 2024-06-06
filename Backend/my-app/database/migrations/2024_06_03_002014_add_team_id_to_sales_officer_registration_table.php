<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTeamIdToSalesOfficerRegistrationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('sales_officer_registration', function (Blueprint $table) {
            $table->unsignedBigInteger('team_id')->nullable()->after('password');
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('sales_officer_registration', function (Blueprint $table) {
            $table->dropColumn('team_id');
            //
        });
    }
}
