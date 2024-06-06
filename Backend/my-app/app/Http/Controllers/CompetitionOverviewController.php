<?php

namespace App\Http\Controllers;

use App\Models\CompetitionOverview;
use Illuminate\Http\Request;

class CompetitionOverviewController extends Controller
{
    public function index()
    {
        return CompetitionOverview::all();
    }

    public function store(Request $request)
    {
        return CompetitionOverview::create($request->all());
    }

    public function show($id)
    {
        return CompetitionOverview::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $competition = CompetitionOverview::findOrFail($id);
        $competition->update($request->all());

        return $competition;
    }

    public function destroy($id)
    {
        $competition = CompetitionOverview::findOrFail($id);
        $competition->delete();

        return response()->json(null, 204);
    }
}
