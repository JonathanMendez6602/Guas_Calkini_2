<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\VehiculoController;
use App\Http\Controllers\API\CorralonController;

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

Route::prefix('person')->group(function () {
    Route::get('/',[ PersonController::class, 'getAll']);
    Route::post('/',[ PersonController::class, 'create']);
    Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);
});

Route::prefix('vehiculo')->group(function () {
    Route::get('/',[ VehiculoController::class, 'getAll']);
    Route::post('/',[ VehiculoController::class, 'create']);
    Route::delete('/{id}',[ VehiculoController::class, 'delete']);
    Route::get('/{id}',[ VehiculoController::class, 'get']);
    Route::put('/{id}',[ VehiculoController::class, 'update']);
    Route::get('/corralon',[VehiculoController::class,'getAllCorralon']);
});

Route::prefix('corralon')->group(function () {
    Route::get('/',[ CorralonController::class, 'getAll']);
    Route::post('/',[ CorralonController::class, 'create']);
    Route::delete('/{id}',[ CorralonController::class, 'delete']);
    Route::get('/{id}',[ CorralonController::class, 'get']);
    Route::put('/{id}',[ CorralonController::class, 'update']);
});

