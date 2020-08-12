<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'Api\NewsController@publishedNewsEntries')->name('news.entries.published.index');
Route::get('published/{id}', 'Api\NewsController@publishedNewsEntry')->name('news.entry.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'Api\NewsController@store')->name('news.store');
    Route::get('/', 'Api\NewsController@index')->name('news.index');
    Route::get('/{id}', 'Api\NewsController@show')->name('news.show');
    Route::match(['put', 'patch'], '/{id}', 'Api\NewsController@update')->name('news.update');
    Route::delete('/{id}', 'Api\NewsController@delete')->name('news.delete');
});