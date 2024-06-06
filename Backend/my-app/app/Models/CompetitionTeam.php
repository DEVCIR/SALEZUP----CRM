<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CompetitionTeam extends Model
{
    protected $table = 'competition_team';
    protected $primaryKey = 'competition_team_id';
    protected $fillable = ['competition_id', 'team_id'];
}
