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

Route::post('sales_agents', [SalesAgentController::class, 'store']);
Route::get('sales_agents', [SalesAgentController::class, 'index']);
Route::get('sales_agents/{id}', [SalesAgentController::class, 'show']);
Route::put('sales_agents/{id}', [SalesAgentController::class, 'update']);
Route::delete('sales_agents/{id}', [SalesAgentController::class, 'destroy']);
Route::put('sales_agents', [SalesAgentController::class,'updateAll']);



use App\Http\Controllers\TeamController;

Route::get('teams', [TeamController::class, 'index']);
Route::get('teams/{id}', [TeamController::class, 'show']);
Route::post('teams', [TeamController::class, 'store']);
Route::put('teams/{id}', [TeamController::class, 'update']);
Route::delete('teams/{id}', [TeamController::class, 'destroy']);
Route::put('teams', [TeamController::class, 'updateAll']);


use App\Http\Controllers\TeamLeaderController;

Route::get('/team_leaders', [TeamLeaderController::class, 'index']);
Route::post('/team_leaders', [TeamLeaderController::class, 'store']);
Route::get('/team_leaders/{id}', [TeamLeaderController::class, 'show']);
Route::put('/team_leaders/{id}', [TeamLeaderController::class, 'update']);
Route::delete('/team_leaders/{id}', [TeamLeaderController::class, 'destroy']);
Route::put('/team_leaders', [TeamLeaderController::class, 'updateAll']);



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

