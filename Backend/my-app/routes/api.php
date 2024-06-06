<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

  
// routes/api.php

// use App\Http\Controllers\UserAndManagerRegistrationController;

// Route::get('/user-manager-registration', [UserAndManagerRegistrationController::class, 'index']);
// Route::post('/user-manager-registration', [UserAndManagerRegistrationController::class, 'store']);


// use App\Http\Controllers\AdminRegistrationController;

// Route::get('/admin-registration', [AdminRegistrationController::class, 'index']);
// Route::post('/admin-registration', [AdminRegistrationController::class, 'store']);



// use App\Http\Controllers\AdminRegistrationController;

// Route::get('/admin-registration', [AdminRegistrationController::class, 'index']);
// Route::post('/admin-registration', [AdminRegistrationController::class, 'store']);
// Route::get('/admin-registration/{email}', [AdminRegistrationController::class, 'getByEmail']);
// Route::get('/api/admin-registration/{id}', [AdminRegistrationController::class, 'getByID']);

// routes/api.php

use App\Http\Controllers\AdminRegistrationController;

Route::get('/admin-registrations', [AdminRegistrationController::class, 'index']);
Route::post('/admin-registrations', [AdminRegistrationController::class, 'store']);
Route::get('/admin-registrations/{id}', [AdminRegistrationController::class, 'show']);
Route::get('/admin-registrations/email/{email}', [AdminRegistrationController::class, 'findByEmail']);
Route::put('/admin-registrations/{id}', [AdminRegistrationController::class, 'updateById']);
Route::put('/admin-registrations/email/{email}', [AdminRegistrationController::class, 'updateByEmail']);Route::delete('/admin-registrations/{id}', [AdminRegistrationController::class, 'deleteById']);
Route::delete('/admin-registrations/{id}', [AdminRegistrationController::class, 'deleteById']);





// http://http://localhost:8000/api/admin-registration



use App\Http\Controllers\SalesAgentRegistrationController;

Route::get('/sales-agents', [SalesAgentRegistrationController::class, 'index']);
Route::get('/sales-agents/{id}', [SalesAgentRegistrationController::class, 'show']);
Route::post('/sales-agents', [SalesAgentRegistrationController::class, 'store']);
Route::put('/sales-agents/{id}', [SalesAgentRegistrationController::class, 'update']);
Route::delete('/sales-agents/{id}', [SalesAgentRegistrationController::class, 'destroy']);

Route::put('/sales-agents/update_teamid/{id}', [SalesAgentRegistrationController::class, 'updateTeamId']);
Route::get('sales_agent/agent_by_teamid/{id}', [SalesAgentRegistrationController::class, 'getSalesAgentsByTeamId']);

Route::put('/sales-agents/update_teamid_null/{id}', [SalesAgentRegistrationController::class, 'updateTeamIdToNull']);

// updateTeamIdToNull



// updateTeamIdToZero




// routes/api.php


use App\Http\Controllers\SalesOfficerRegistrationController;

Route::get('/sales-officers', [SalesOfficerRegistrationController::class, 'index']);
Route::get('/sales-officers/{id}', [SalesOfficerRegistrationController::class, 'show']);
Route::post('/sales-officers', [SalesOfficerRegistrationController::class, 'store']);
Route::put('/sales-officers/{id}', [SalesOfficerRegistrationController::class, 'update']);
Route::delete('/sales-officers/{id}', [SalesOfficerRegistrationController::class, 'destroy']);

Route::put('/sales-off/update_teamid/{id}', [SalesOfficerRegistrationController::class, 'updateTeamId']);
Route::get('sales_off/officer_by_teamid/{id}', [SalesOfficerRegistrationController::class, 'getSalesOfficerByTeamId']);
Route::put('/sales-off/update_teamid_null/{id}', [SalesOfficerRegistrationController::class, 'updateTeamIdToNull']);


use App\Http\Controllers\BadgeController;

Route::get('/badges', [BadgeController::class, 'index']);
Route::get('/badges/{id}', [BadgeController::class, 'show']);
Route::post('/badges', [BadgeController::class, 'store']);
Route::put('/badges/{id}', [BadgeController::class, 'update']);
Route::delete('/badges/{id}', [BadgeController::class, 'destroy']);




use App\Http\Controllers\TeamController;

Route::get('/teams', [TeamController::class, 'index']);
Route::post('/teams', [TeamController::class, 'store']);
Route::get('/teams/{id}', [TeamController::class, 'show']);
Route::get('/teams/name/{name}', [TeamController::class, 'getTeamIdByName']);
Route::put('/teams/{id}', [TeamController::class, 'update']);
Route::delete('/teams/{id}', [TeamController::class, 'destroy']);





use App\Http\Controllers\SpiffCompetitionController;

Route::get('/spiff_competitions', [SpiffCompetitionController::class, 'index']);
Route::post('/spiff_competitions', [SpiffCompetitionController::class, 'store']);
Route::get('/spiff_competitions/{id}', [SpiffCompetitionController::class, 'show']);
Route::put('/spiff_competitions_update/{id}', [SpiffCompetitionController::class, 'update']);
Route::delete('/spiff_competitions/{id}', [SpiffCompetitionController::class, 'destroy']);


use App\Http\Controllers\CompetitionOverviewController;

Route::get('/competition_overview', 'App\Http\Controllers\CompetitionOverviewController@index');
Route::post('/competition_overview', 'App\Http\Controllers\CompetitionOverviewController@store');
Route::get('/competition_overview/{id}', 'App\Http\Controllers\CompetitionOverviewController@show');
Route::put('/competition_overview/{id}', 'App\Http\Controllers\CompetitionOverviewController@update');
Route::delete('/competition_overview/{id}', 'App\Http\Controllers\CompetitionOverviewController@destroy');



use App\Http\Controllers\CompetitionTeamController;

Route::get('/competition_teams', [CompetitionTeamController::class, 'index']);
Route::post('/competition_teams', [CompetitionTeamController::class, 'store']);
Route::get('/competition_teams/{id}', [CompetitionTeamController::class, 'show']);
Route::put('/competition_teams/{id}', [CompetitionTeamController::class, 'update']);
Route::delete('/competition_teams/{id}', [CompetitionTeamController::class, 'destroy']);

Route::get('/competition_teams/competition/{competitionId}', [CompetitionTeamController::class, 'getCompetitionByCompetitionId']);
Route::get('/competition_teams/team/{teamId}', [CompetitionTeamController::class, 'getCompetitionByTeamId']);




// getSalesAgentsByTeamId($teamId)



// http://http://localhost:8000/api/sales-officers


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
   return $request->user();
    
});

