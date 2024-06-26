<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesAgent extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'surname', 'team_id', 'manager', 'commission', 
        'target', 'target_value', 'frequency', 'campaign', 'start_date', 'active'
    ];
}
