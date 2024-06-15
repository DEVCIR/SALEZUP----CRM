<?php

namespace App\Http\Controllers;

use App\Models\SalesAgent;
use Illuminate\Http\Request;

class SalesAgentController extends Controller
{
    public function index()
    {
        return SalesAgent::all();
    }

    public function show($id)
    {
        return SalesAgent::find($id);
    }

    public function store(Request $request)
    {
        return SalesAgent::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $salesAgent = SalesAgent::find($id);

        $request->validate([
            'name' => 'sometimes|required',
            'surname' => 'sometimes|required',
            'team_id' => 'sometimes|required|integer',
            'manager' => 'sometimes|required',
            'commission' => 'sometimes|required',
            'target' => 'sometimes|required',
            'target_value' => 'sometimes|required',
            'frequency' => 'sometimes|required',
            'campaign' => 'sometimes|required',
            'start_date' => 'sometimes|required|date',
            'active' => 'sometimes|in:yes,no'
        ]);

        $salesAgent->update($request->all());

        return $salesAgent;
    }

    public function destroy($id)
    {
        return SalesAgent::destroy($id);
    }

    public function updateAll(Request $request)
    {
        $request->validate([
            '*.id' => 'required|exists:sales_agents,id',
            '*.name' => 'sometimes|required',
            '*.surname' => 'sometimes|required',
            '*.team_id' => 'sometimes|required|integer',
            '*.manager' => 'sometimes|required',
            '*.commission' => 'sometimes|required',
            '*.target' => 'sometimes|required',
            '*.target_value' => 'sometimes|required',
            '*.frequency' => 'sometimes|required',
            '*.campaign' => 'sometimes|required',
            '*.start_date' => 'sometimes|required|date',
            '*.active' => 'sometimes|in:yes,no'
        ]);

        $updatedAgents = [];

        foreach ($request->all() as $agentData) {
            $salesAgent = SalesAgent::find($agentData['id']);
            $salesAgent->update($agentData);
            $updatedAgents[] = $salesAgent;
        }

        return $updatedAgents;
    }
}
