<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\PersonalInfoController;
use App\Http\Controllers\LifeStyleController;
use App\Http\Controllers\ProfessionController;
use App\Http\Controllers\AppearanceController;
use App\Http\Controllers\AboutMeController;
use App\Http\Controllers\ImagesController;

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


Route::get('users',[RegistrationController::class,'index']);
Route::get('users/{id}',[RegistrationController::class,'edit']);
Route::post('users',[RegistrationController::class,'store']);
Route::post('dashboard',[RegistrationController::class,'userAuthentication']);

//Personal Information Post Info Routes
Route::post('appearance',[AppearanceController::class,'store']);
Route::post('lifestyle',[LifeStyleController::class,'store']);
Route::post('personalInfo',[PersonalInfoController::class,'store']);
Route::post('profession',[ProfessionController::class,'store']);
Route::post('aboutme',[AboutMeController::class,'store']);

//Images & Videos Routes
Route::get('images/{id}',[ImagesController::class,'edit']);
Route::post('images',[ImagesController::class,'store']);

//Personal Information Get Info Routes
Route::get('education/{id}',[ProfessionController::class,'edit']);
Route::get('personalInfo/{id}',[PersonalInfoController::class,'edit']);
Route::get('aboutme/{id}',[AboutMeController::class,'edit']);
Route::get('lifestyle/{id}',[LifeStyleController::class,'edit']);
Route::get('appearance/{id}',[AppearanceController::class,'edit']);
