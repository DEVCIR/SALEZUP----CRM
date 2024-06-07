<?php

namespace App\Http\Controllers;

use App\Models\CompetitionOverview;
use Illuminate\Http\Request;

class CompetitionOverviewController extends Controller
{
    public function index()
    {   
        $competitions = CompetitionOverview::all();
        return response()->json($competitions);
    }

    public function store(Request $request)
    {
        $competition = CompetitionOverview::create($request->all());
        return response()->json($competition, 201);
    }

    public function show($id)
    {
        $competition = CompetitionOverview::findOrFail($id);
        return response()->json($competition);
    }

    public function update(Request $request, $id)
    {
        $competition = CompetitionOverview::findOrFail($id);
        $competition->update($request->all());

        return response()->json($competition);
    }

    public function destroy($id)
    {
        $competition = CompetitionOverview::findOrFail($id);
        $competition->delete();

        return response()->json(null, 204);
    }
}
