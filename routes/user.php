<?php 

Route::group(['middleware' => 'checklogin'], function() {

	Route::get('user-dashboard', 'userController@dashBoard')->name('user-dashboard');

	Route::get('my-profile', 'userController@myProFile')->name('my-profile');

	Route::get('work-save', 'userController@workSave')->name('work-save');

	Route::get('work-apply', 'userController@workApply')->name('work-apply');

	Route::get('notification-user', 'userController@notification')->name('notification-user');

	Route::get('logout-user','UserLoginController@logoutUser')->name('logoutUser');

	Route::get('cv/{id}', 'userController@viewCv')->name('viewCv');

	Route::get('employer-view', 'userController@employerView')->name('employerView');

	Route::post('upload-cv-pdf', 'userController@upload_cv_pdf')->name('upload-cv-file');

	Route::post('uploadAvatar', 'userController@uploadAvatar')->name('upload-avatar');
});	
Route::get('ung-vien/dang-ky', 'userController@registerUser')->name('registerClientUser');

Route::get('ung-vien/dang-nhap', 'userController@viewLogin')->name('login-users');

Route::post('update-password-user/{token}', 'userController@updatePassWord')->name('update-password-user-id');

Route::get('update-password-user', 'userController@showViewUpdatePassWord')->name('update-password-user');

