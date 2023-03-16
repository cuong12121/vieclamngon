<?php 

Route::group(['middleware' => 'checklogin'], function() {

	Route::get('user-dashboard', 'userController@dashBoard')->name('user-dashboard');

	Route::get('my-profile', 'userController@myProFile')->name('my-profile');

	Route::get('work-save', 'userController@workSave')->name('work-save');

	Route::get('work-apply', 'userController@workApply')->name('work-apply');

	Route::get('notification-user', 'userController@notification')->name('notification-user');

	Route::get('logout-user','UserLoginController@logoutUser')->name('logoutUser');

	Route::get('cv/{id}', 'userController@viewCv')->name('viewCv');


	Route::post('upload-cv-pdf', 'userController@upload_cv_pdf')->name('upload-cv-file');
});	
Route::get('register-client-user', 'userController@registerUser')->name('registerClientUser');

