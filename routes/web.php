<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('test');
// });

Route::get('/red', 'PropertyController@view');
Route::get('/', 'PropertyController@getCountry');
Route::get('/ad', 'PropertyController@getCountry');
Route::get('/states/{country_id}', 'PropertyController@getState');
Route::get('/lga/{state_id}', 'PropertyController@getLga');
Route::post('/addMainDetails', 'PropertyController@addProperty');
