<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompetitionOverview extends Model
{
    protected $table = 'competition_overview';
    protected $fillable = ['type', 'prize', 'prize_value', 'point', 'start_time', 'end_time', 'duration', 'winner']; // Added 'prize_value'
}
