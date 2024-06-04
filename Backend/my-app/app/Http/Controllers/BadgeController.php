<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Badge;

class BadgeController extends Controller
{
    public function index()
    {
        return Badge::all();
    }

    public function show($id)
    {
        return Badge::findOrFail($id);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'badge_name' => 'required|string',
            'image_path' => 'required|string',
            'description' => 'required|string',
            'status' => 'required|string',
        ]);

        return Badge::create($validatedData);
    }

    public function update(Request $request, $id)
    {
        $badge = Badge::findOrFail($id);

        $validatedData = $request->validate([
            'badge_name' => 'required|string',
            'image_path' => 'required|string',
            'description' => 'required|string',
            'status' => 'required|string',
        ]);

        $badge->update($validatedData);

        return $badge;
    }

    public function destroy($id)
    {
        $badge = Badge::findOrFail($id);
        $badge->delete();

        return response()->json(['message' => 'Badge deleted successfully']);
    }
}
