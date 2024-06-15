<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function index()
    {
        return response()->json(Campaign::all(), 200);
    }

    public function show($id)
    {
        $campaign = Campaign::find($id);
        if ($campaign) {
            return response()->json($campaign, 200);
        } else {
            return response()->json(['message' => 'Campaign not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $campaign = Campaign::create($request->all());
        return response()->json($campaign, 201);
    }

    public function update(Request $request, $id)
    {
        $campaign = Campaign::find($id);
        if ($campaign) {
            $campaign->update($request->all());
            return response()->json($campaign, 200);
        } else {
            return response()->json(['message' => 'Campaign not found'], 404);
        }
    }

    public function updateAll(Request $request)
    {
        $data = $request->all();
        foreach ($data as $item) {
            $campaign = Campaign::find($item['id']);
            if ($campaign) {
                $campaign->update($item);
            }
        }
        return response()->json(['message' => 'All campaigns updated'], 200);
    }

    public function destroy($id)
    {
        $campaign = Campaign::find($id);
        if ($campaign) {
            $campaign->delete();
            return response()->json(['message' => 'Campaign deleted'], 200);
        } else {
            return response()->json(['message' => 'Campaign not found'], 404);
        }
    }
}
