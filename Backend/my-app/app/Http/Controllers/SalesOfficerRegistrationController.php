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










    public function updateTeamId(Request $request, $id)
{
    $salesOfficer = SalesOfficerRegistration::findOrFail($id);
    
    // Validate the request data to ensure 'team_id' is present and exists in the 'teams' table
    $request->validate([
        'team_id' => 'required|exists:teams,id'
    ]);

    // Update the team_id
    $salesOfficer->update(['team_id' => $request->input('team_id')]);
    
    return $salesOfficer;
}

public function getSalesOfficerByTeamId($teamId)
    {
        return SalesOfficerRegistration::where('team_id', $teamId)->get();
    }


    public function updateTeamIdToNull($id)
{
    $salesOfficer = SalesOfficerRegistration::findOrFail($id);
    
    // Update the team_id to NULL
    $salesOfficer->update(['team_id' => null]);
    
    return $salesOfficer;
}
}
