<?php


// app/Http/Controllers/AdminRegistrationController.php

namespace App\Http\Controllers;

use App\Models\AdminRegistration;
use Illuminate\Http\Request;

class AdminRegistrationController extends Controller
{
    public function index()
    {
        return AdminRegistration::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:admin_registrations',
            'password' => 'required|min:1',
        ]);

        return AdminRegistration::create($request->all());
    }

    public function show($id)
    {
        return AdminRegistration::findOrFail($id);
    }

    public function findByEmail($email)
    {
        return AdminRegistration::where('email', $email)->firstOrFail();
    }






// -------------------------- UPDATE API ----------------------------------------//



public function updateById(Request $request, $id)
{
    $adminRegistration = AdminRegistration::findOrFail($id);

    $request->validate([
        'first_name' => 'required',
        'last_name' => 'required',
        'email' => 'required|email|unique:admin_registrations,email,' . $adminRegistration->id,
        'password' => 'required|min:1',
    ]);

    $adminRegistration->update($request->all());

    return $adminRegistration;
}

public function updateByEmail(Request $request, $email)
{
    $adminRegistration = AdminRegistration::where('email', $email)->firstOrFail();

    $request->validate([
        'first_name' => 'required',
        'last_name' => 'required',
        'password' => 'required|min:1',
    ]);

    $adminRegistration->update($request->all());

    return $adminRegistration;
}



public function deleteById($id)
{
    $adminRegistration = AdminRegistration::findOrFail($id);
    $adminRegistration->delete();

    return response()->json(['message' => 'Admin registration deleted successfully'], 200);
}





}
