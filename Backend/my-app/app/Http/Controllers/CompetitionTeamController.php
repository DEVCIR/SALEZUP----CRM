<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CompetitionTeam;

class CompetitionTeamController extends Controller
{
    public function index()
    {
        return CompetitionTeam::all();
    }

    public function store(Request $request)
    {   
        // print_r($request);
        
        return CompetitionTeam::create($request->all());
    }

    public function show($id)
    {
        return CompetitionTeam::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $competitionTeam = CompetitionTeam::findOrFail($id);
        $competitionTeam->update($request->all());

        return $competitionTeam;
    }

    public function destroy($id)
    {
        $competitionTeam = CompetitionTeam::findOrFail($id);
        $competitionTeam->delete();

        return 204;
    }

    public function getCompetitionByTeamId($teamId)
    {
        return CompetitionTeam::where('team_id', $teamId)->get();
    }

    public function getCompetitionByCompetitionId($competitionId)
    {
        return CompetitionTeam::where('competition_id', $competitionId)->get();
    }
}
