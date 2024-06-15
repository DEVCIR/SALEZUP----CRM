<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'team_name',
        'team_lead',
        'status',
    ];

    protected $casts = [
        'team_name' => 'array',
    ];
}
