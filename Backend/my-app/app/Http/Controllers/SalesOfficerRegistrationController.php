<?php

namespace App\Http\Controllers;

use App\Models\SalesOfficerRegistration;
use Illuminate\Http\Request;

class SalesOfficerRegistrationController extends Controller
{
    public function index()
    {
        return SalesOfficerRegistration::all();
    }

    public function show($id)
    {
        return SalesOfficerRegistration::findOrFail($id);
    }

    public function store(Request $request)
    {
        return SalesOfficerRegistration::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $salesOfficer = SalesOfficerRegistration::findOrFail($id);
        $salesOfficer->update($request->all());
        return $salesOfficer;
    }

    public function destroy($id)
    {
        $salesOfficer = SalesOfficerRegistration::findOrFail($id);
        $salesOfficer->delete();
        return 204;
    }
}
