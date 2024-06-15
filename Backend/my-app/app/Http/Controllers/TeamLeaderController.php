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

    public function show($id)
    {
        return TeamLeader::findOrFail($id);
    }

    public function store(Request $request)
    {
        return TeamLeader::create($request->all());
    }

    public function update(Request $request, $id)
    {
        $teamLeader = TeamLeader::findOrFail($id);

        $request->validate([
            'name' => 'sometimes|string',
            'surname' => 'sometimes|string',
            'start_date' => 'sometimes|date',
            'team_id' => 'sometimes|integer',
            'manager' => 'sometimes|string',
            'commission' => 'sometimes|string',
            'target' => 'sometimes|string',
            'target_value' => 'sometimes|string',
            'frequency' => 'sometimes|string',
            'campaign' => 'sometimes|string',
            'active' => 'nullable|string|in:approved,pending',
        ]);

        $teamLeader->update($request->all());

        return response()->json($teamLeader, 200);
    }

    public function destroy($id)
    {
        TeamLeader::findOrFail($id)->delete();

        return response()->json(null, 204);
    }

    public function updateAll(Request $request)
    {
        $request->validate([
            '*.name' => 'sometimes|string',
            '*.surname' => 'sometimes|string',
            '*.start_date' => 'sometimes|date',
            '*.team_id' => 'sometimes|integer',
            '*.manager' => 'sometimes|string',
            '*.commission' => 'sometimes|string',
            '*.target' => 'sometimes|string',
            '*.target_value' => 'sometimes|string',
            '*.frequency' => 'sometimes|string',
            '*.campaign' => 'sometimes|string',
            '*.active' => 'nullable|string|in:approved,pending',
        ]);

        $teamLeaders = $request->all();
        foreach ($teamLeaders as $teamLeader) {
            $existingTeamLeader = TeamLeader::findOrFail($teamLeader['id']);
            $existingTeamLeader->update($teamLeader);
        }

        return response()->json(TeamLeader::all(), 200);
    }
}
