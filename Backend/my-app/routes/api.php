<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

  
use App\Http\Controllers\AdminRegistrationController;

Route::get('/admin-registrations', [AdminRegistrationController::class, 'index']);
Route::post('/admin-registrations', [AdminRegistrationController::class, 'store']);
Route::get('/admin-registrations/{id}', [AdminRegistrationController::class, 'show']);
Route::get('/admin-registrations/email/{email}', [AdminRegistrationController::class, 'findByEmail']);
Route::put('/admin-registrations/{id}', [AdminRegistrationController::class, 'updateById']);
Route::put('/admin-registrations/email/{email}', [AdminRegistrationController::class, 'updateByEmail']);Route::delete('/admin-registrations/{id}', [AdminRegistrationController::class, 'deleteById']);
Route::delete('/admin-registrations/{id}', [AdminRegistrationController::class, 'deleteById']);





// http://http://localhost:8000/api/admin-registration



// routes/api.php

















// --------------------------------------------------- SALEZ UP -------------------------------------------------------//



use App\Http\Controllers\SalesAgentController;

Route::get('sales-agents', [SalesAgentController::class, 'index']);
Route::get('sales-agents/{id}', [SalesAgentController::class, 'show']);
Route::post('sales-agents', [SalesAgentController::class, 'store']);
Route::put('sales-agents/{id}', [SalesAgentController::class, 'update']);
Route::delete('sales-agents/{id}', [SalesAgentController::class, 'destroy']);
Route::put('sales-agents', [SalesAgentController::class, 'updateAll']);




use App\Http\Controllers\TeamController;

Route::get('teams', [TeamController::class, 'index']);
Route::get('teams/{id}', [TeamController::class, 'show']);
Route::post('teams', [TeamController::class, 'store']);
Route::put('teams/{id}', [TeamController::class, 'update']);
Route::delete('teams/{id}', [TeamController::class, 'destroy']);
Route::put('teams', [TeamController::class, 'updateAll']);


use App\Http\Controllers\TeamLeaderController;

Route::get('/team_leaders', [TeamLeaderController::class, 'index']);
Route::get('/team_leaders/{id}', [TeamLeaderController::class, 'show']);
Route::post('/team_leaders', [TeamLeaderController::class, 'store']);
Route::put('/team_leaders/{id}', [TeamLeaderController::class, 'update']);
Route::delete('/team_leaders/{id}', [TeamLeaderController::class, 'destroy']);
Route::put('/team_leaders', [TeamLeaderController::class, 'updateAll']);


use App\Http\Controllers\CampaignController;

Route::get('/campaign', [CampaignController::class, 'index']);
Route::get('/campaign_by_{id}', [CampaignController::class, 'show']);
Route::post('/campaign', [CampaignController::class, 'store']);
Route::put('/campaign_update_by_{id}', [CampaignController::class, 'update']);
Route::put('/campaign_update', [CampaignController::class, 'updateAll']);
Route::delete('/campaign_delete_by_{id}', [CampaignController::class, 'destroy']);






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

