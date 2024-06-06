<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrizeValueToCompetitionOverviewTable extends Migration
{
    public function up()
    {
        Schema::table('competition_overview', function (Blueprint $table) {
            $table->string('prize_value')->after('prize');
        });
    }

    public function down()
    {
        Schema::table('competition_overview', function (Blueprint $table) {
            $table->dropColumn('prize_value');
        });
    }
}
