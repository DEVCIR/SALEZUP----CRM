<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTeamIdToCompetitionOverviewTable extends Migration
{
    public function up()
    {
        Schema::table('competition_overview', function (Blueprint $table) {
            $table->unsignedBigInteger('team_id')->nullable()->after('winner');
        });
    }

    public function down()
    {
        Schema::table('competition_overview', function (Blueprint $table) {
            $table->dropColumn('team_id');
        });
    }
}
