<?php

namespace App\Http\Controllers;

use App\Models\TeamLeader;
use Illuminate\Http\Request;

class TeamLeaderController extends Controller
{
    public function index()
    {
        return TeamLeader::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'surname' => 'required|string',
            'start_date' => 'required|string',
            'team_id' => 'required|integer',
            'manager' => 'required|string',
            'commission' => 'required|string',
            'target' => 'required|string',
            'frequency' => 'required|string',
            'campaign' => 'required|string',
            'active' => 'in:approved,pending',
        ]);

        $teamLeader = TeamLeader::create($request->all());

        return response()->json($teamLeader, 201);
    }

    public function show($id)
    {
        return TeamLeader::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $teamLeader = TeamLeader::findOrFail($id);
        $teamLeader->update($request->all());

        return response()->json($teamLeader, 200);
    }

    public function destroy($id)
    {
        TeamLeader::destroy($id);

        return response()->json(null, 204);
    }

    public function updateAll(Request $request)
    {
        TeamLeader::query()->update($request->all());

        return response()->json(['message' => 'All team leaders updated successfully'], 200);
    }
}
