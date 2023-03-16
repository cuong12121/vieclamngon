<?php

Route::get('login', 'adminController@login')->name('admin login'); 

Route::post('post-login', 'adminController@loginAdminUser')->name('post-login-admin');

Route::get('register', 'adminController@regiterView')->name('admin-view-register'); 

Route::post('post-register', 'adminController@registerUser')->name('post-register-admin');

Route::group(['middleware' => 'checkad'], function() {

	Route::get('list-user', 'adminController@index')->name('list-user');

	Route::get('banner', 'adminController@banner')->name('admin-banner');

	Route::post('postEditBanner/{id}', 'adminController@postEditBanner')->name('postEditBanner');

	Route::post('create-posts', 'adminController@store')->name('create-posts');

	Route::post('update-post/{id}', 'adminController@update')->name('update-post');

	Route::get('banner/{id}', 'adminController@bannerviewedit')->name('admin-banner-edit');

	Route::get('delete-user', 'adminController@remove_user')->name('Remove-user');

	
	Route::get('Listboard', 'adminController@Listboard')->name('admin-view-Listboard'); 

	Route::get('post', 'adminController@listpost')->name('list-post'); 

	Route::get('post/{id}', 'adminController@edit');

	Route::get('create-post', 'adminController@indexPost')->name('create-post'); 

	Route::get('employerlistboard', 'adminController@ListEmployer')->name('admin-list-employer'); 

	Route::get('cv/{id}', 'adminController@viewCv')->name('viewCvadmin');

	Route::get('ajax-showJob', 'adminController@showJob')->name('admin-showjob');

	Route::get('showApplyJob', 'adminController@showApplyJob')->name('showApplyJob-ad');

	Route::get('delete-employ/{id}', 'adminController@removeEmploy')->name('delete-employ');

});

Route::get('logout', 'adminController@logout')->name('admin-logout');


