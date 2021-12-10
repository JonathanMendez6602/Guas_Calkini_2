<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\PersonController;
use App\Http\Controllers\API\VehiculoController;
use App\Http\Controllers\API\CorralonController;
use App\Http\Controllers\API\AseguradoraController;
use App\Http\Controllers\API\GruaController;
use App\Http\Controllers\API\ChoferController;
USE App\Http\Controllers\API\CatalogoController;
use App\Http\Controllers\API\BranchOfficeController; 

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
    Route::get('/sucursal',[ VehiculoController::class, 'getAllSucursal']);
    Route::get('/corralon',[VehiculoController::class,'getAllCorralon']);
    Route::post('/',[ VehiculoController::class, 'create']);
    Route::delete('/{id}',[ VehiculoController::class, 'delete']);
    Route::get('/{id}',[ VehiculoController::class, 'get']);
    Route::put('/{id}',[ VehiculoController::class, 'update']);
});

Route::prefix('corralon')->group(function () {
    Route::get('/',[ CorralonController::class, 'getAll']);
    Route::post('/',[ CorralonController::class, 'create']);
    Route::delete('/{id}',[ CorralonController::class, 'delete']);
    Route::get('/{id}',[ CorralonController::class, 'get']);
    Route::put('/{id}',[ CorralonController::class, 'update']);
});

Route::prefix('aseguradora')->group(function () {
    Route::get('/',[ AseguradoraController::class, 'getAll']);
    Route::post('/',[ AseguradoraController::class, 'create']);
    Route::delete('/{id}',[ AseguradoraController::class, 'delete']);
    Route::get('/{id}',[ AseguradoraController::class, 'get']);
    Route::put('/{id}',[ AseguradoraController::class, 'update']);
});

Route::prefix('grua')->group(function () {
    Route::get('/',[ GruaController::class, 'getAll']);
    Route::post('/',[ GruaController::class, 'create']);
    Route::delete('/{id}',[ GruaController::class, 'delete']);
    Route::get('/{id}',[ GruaController::class, 'get']);
    Route::put('/{id}',[ GruaController::class, 'update']);
    Route::get('/cambiob/{id}',[ GruaController::class, 'getbaja']);
    Route::delete('/cambio/{id}',[ GruaController::class, 'baja']);
});

Route::prefix('chofer')->group(function () {
    Route::get('/',[ ChoferController::class, 'getAll']);
    Route::post('/',[ ChoferController::class, 'create']);
    Route::delete('/{id}',[ ChoferController::class, 'delete']);
    Route::get('/{id}',[ ChoferController::class, 'get']);
    Route::put('/{id}',[ ChoferController::class, 'update']);
    Route::get('/cambiob/{id}',[ ChoferController::class, 'getbaja']);
    Route::delete('/cambio/{id}',[ ChoferController::class, 'baja']);
});

Route::prefix('catalogo')->group(function () {
    Route::get('/',[ CatalogoController::class, 'getAll']);
    Route::post('/',[ CatalogoController::class, 'create']);
    Route::delete('/{id}',[ CatalogoController::class, 'delete']);
    Route::get('/{id}',[ CatalogoController::class, 'get']);
    Route::put('/{id}',[ CatalogoController::class, 'update']);
});

Route::prefix('sucursal')->group(function () {
    Route::get('/',[ BranchOfficeController::class, 'getAll']);
    Route::post('/',[ BranchOfficeController::class, 'create']);
    Route::delete('/{id}',[ BranchOfficeController::class, 'delete']);
    Route::get('/{id}',[ BranchOfficeController::class, 'get']);
    Route::put('/{id}',[ BranchOfficeController::class, 'update']);
});


