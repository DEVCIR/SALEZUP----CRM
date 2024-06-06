<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesOfficerRegistration extends Model
{
    use HasFactory;

    protected $table = 'sales_officer_registration';

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'team_id',
        'status',
    ];
}
