<?php



namespace App\Http\Controllers;

use App\Models\SpiffCompetition;
use Illuminate\Http\Request;

class SpiffCompetitionController extends Controller
{
    public function index()
    {
        return SpiffCompetition::all();
    }

    public function store(Request $request)
    {
        return SpiffCompetition::create($request->all());
    }

    public function show($id)
    {
        return SpiffCompetition::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $competition = SpiffCompetition::findOrFail($id);
        $competition->update($request->all());

        return $competition;
    }

    public function destroy($id)
    {
        $competition = SpiffCompetition::findOrFail($id);
        $competition->delete();

        return 204;
    }
}
