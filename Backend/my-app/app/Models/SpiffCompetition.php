<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SpiffCompetition extends Model
{
    protected $fillable = [
        'type',
        'prize',
        'team',
        'point',
        'start_time',
        'end_time',
        'duration',
        'prize_value',
        'winner'
    ];
}
