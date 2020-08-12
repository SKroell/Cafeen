<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

$api_version = config('api.api_version');

Route::group(["prefix" => "{$api_version}"], function() {

    Route::get('/foo', function () {
        return 'Hello World';
    });

    // register auth routes
    Route::prefix('auth')->group(base_path('routes/api/auth.php'));

    // register users routes
    Route::prefix('users')->group(base_path('routes/api/users.php'));

    // register news routes
    Route::prefix('news')->group(base_path('routes/api/news.php'));

});