<?php
namespace App\Http\Controllers;
use App\Models\UserAndManagerRegistration;
use Illuminate\Http\Request;
class UserAndManagerRegistrationController extends Controller
{
    public function index()
    {
        return UserAndManagerRegistration::all();
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:user_and_manager_registration',
            'password' => 'required|min:6',
            'confirm_password' => 'required|same:password',
        ]);
        return UserAndManagerRegistration::create($validatedData);
    }
}