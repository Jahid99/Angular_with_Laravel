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

Route::get('/', function () {
    return view('welcome');
});

Route::post('/adduser', 'UserController@addUser');

Route::get('/getallusers', 'UserController@getAllUsers');

Route::get('/delete_user/{id}', 'UserController@deleteUser');

Route::get('/select_user/{id}', 'UserController@selectUser');

Route::post('/edituser','UserController@updateUser');
