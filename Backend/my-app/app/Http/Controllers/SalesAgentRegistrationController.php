<?php

namespace App\Http\Controllers;

use App\Models\SalesAgentRegistration;
use Illuminate\Http\Request;

class SalesAgentRegistrationController extends Controller
{
    public function index()
    {
        return SalesAgentRegistration::all();
    }

    public function show($id)
    {
        return SalesAgentRegistration::findOrFail($id);
    }

    public function store(Request $request)
    {
        return SalesAgentRegistration::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $salesAgent = SalesAgentRegistration::findOrFail($id);
        $salesAgent->update($request->all());
        return $salesAgent;
    }

    public function destroy($id)
    {
        $salesAgent = SalesAgentRegistration::findOrFail($id);
        $salesAgent->delete();
        return 204;
    }

    public function updateTeamId(Request $request, $id)
{
    $salesAgent = SalesAgentRegistration::findOrFail($id);
    
    // Validate the request data to ensure 'team_id' is present and exists in the 'teams' table
    $request->validate([
        'team_id' => 'required|exists:teams,id'
    ]);

    // Update the team_id
    $salesAgent->update(['team_id' => $request->input('team_id')]);
    
    return $salesAgent;
}

public function getSalesAgentsByTeamId($teamId)
    {
        return SalesAgentRegistration::where('team_id', $teamId)->get();
    }


    public function updateTeamIdToNull($id)
{
    $salesAgent = SalesAgentRegistration::findOrFail($id);
    
    // Update the team_id to NULL
    $salesAgent->update(['team_id' => null]);
    
    return $salesAgent;
}

    
    




}
