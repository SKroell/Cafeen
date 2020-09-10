<?php

use Illuminate\Support\Facades\Route;

Route::get('{id}', 'PageController@publishedPage')->name('page.entry.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'PageController@store')->name('page.store');
    Route::get('/', 'PageController@index')->name('page.index');
    Route::match(['put', 'patch'], '/{id}', 'PageController@update')->name('page.update');
    Route::delete('/{id}', 'PageController@delete')->name('page.delete');
});