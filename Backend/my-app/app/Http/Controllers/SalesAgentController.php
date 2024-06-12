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

    public function store(Request $request)
    {
        return SalesAgent::create($request->all());
    }

    public function show($id)
    {
        return SalesAgent::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $agent = SalesAgent::findOrFail($id);
        $agent->update($request->all());
        return $agent;
    }

    public function destroy($id)
    {
        $agent = SalesAgent::findOrFail($id);
        $agent->delete();
        return 204;
    }

    public function updateAll(Request $request)
    {
        SalesAgent::update($request->all());
        return SalesAgent::all();
    }
}