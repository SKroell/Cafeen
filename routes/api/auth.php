<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('login', 'Auth\LoginController@login')->name('auth.login');

Route::group(['middleware' => 'auth:api'], function() {
    Route::delete('/logout', 'Auth\LoginController@logout')->name('auth.logout');;

    Route::get('/me', function (Request $request) {
        return $request->user();
    });
});