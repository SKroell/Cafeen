<?php

use Illuminate\Support\Facades\Route;

Route::get('published', 'NewsController@publishedNewsEntries')->name('news.entries.published.index');
Route::get('published/{id}', 'NewsController@publishedNewsEntry')->name('news.entry.published.show');

Route::group(['middleware' => 'auth:api'], function() {
    Route::post('/', 'NewsController@store')->name('news.store');
    Route::get('/', 'NewsController@index')->name('news.index');
    Route::get('/{id}', 'NewsController@show')->name('news.show');
    Route::match(['put', 'patch'], '/{id}', 'NewsController@update')->name('news.update');
    Route::delete('/{id}', 'NewsController@delete')->name('news.delete');
});