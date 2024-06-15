<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamLeader extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'surname',
        'start_date',
        'team_id',
        'manager',
        'commission',
        'target',
        'target_value',
        'frequency',
        'campaign',
        'active',
    ];
}
