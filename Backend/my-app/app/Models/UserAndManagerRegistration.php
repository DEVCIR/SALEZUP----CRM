<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAndManagerRegistration extends Model
{
    use HasFactory;

    protected $table = 'user_and_manager_registration';
    protected $fillable = ['first_name', 'last_name', 'email', 'password'];
}
