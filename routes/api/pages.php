<?php

use Illuminate\Support\Facades\Route;

Route::get('{id}', 'Api\PageController@publishedPage')->name('page.entry.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'Api\PageController@store')->name('page.store');
    Route::get('/', 'Api\PageController@index')->name('page.index');
    Route::match(['put', 'patch'], '/{id}', 'Api\PageController@update')->name('page.update');
    Route::delete('/{id}', 'Api\PageController@delete')->name('page.delete');
});