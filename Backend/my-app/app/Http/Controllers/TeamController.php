<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Team;

class TeamController extends Controller
{
    // Get all teams
    public function index()
    {
        return Team::all();
    }

    // Get a single team by ID
    public function show($id)
    {
        return Team::findOrFail($id);
    }

    public function store(Request $request)
    {
        return Team::create($request->all());
    }

    // Update an existing team by ID
    public function update(Request $request, $id)
    {
        $team = Team::findOrFail($id);
        $team->update($request->all());

        return $team;
    }

    // Delete a team by ID
    public function destroy($id)
    {
        Team::findOrFail($id)->delete();

        return response()->json(['message' => 'Team deleted successfully']);
    }

    // Update all teams
    public function updateAll(Request $request)
    {
        $request->validate([
            'status' => 'required|string|in:active,no active',
        ]);

        Team::query()->update(['status' => $request->status]);

        return response()->json(['message' => 'All teams updated successfully']);
    }
}
