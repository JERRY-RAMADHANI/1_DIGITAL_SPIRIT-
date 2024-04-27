<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PlantController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\SectorController;
use App\Http\Controllers\HistoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::prefix('plant')->group(function () {
    Route::post('/store', [PlantController::class, 'store']);
    Route::delete('/delete/{id}', [PlantController::class, 'destroy']);
});

Route::prefix('history')->group(function () {
    Route::get('/', [HistoryController::class, 'index']);
    Route::post('/store', [HistoryController::class, 'store']);
    Route::get('/{history}', [HistoryController::class, 'show']);
    Route::patch('/{history}', [HistoryController::class, 'update']);
    Route::delete('/{history}', [HistoryController::class, 'destroy']);
});

Route::prefix('sector')->group(function () {
    Route::get('/', [SectorController::class, 'index']);
    Route::get('/detail/{id}', [SectorController::class, 'detail']);
});

Route::prefix('message')->group(function () {
    Route::post('/sendMessage', [ReportController::class, 'sendMessage']);
    Route::get('/chatHistory', [reportController::class, 'getChatHistory']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
