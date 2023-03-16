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


Route::get('/', 'indexController@Home')->name('home');

Route::get('/crawl', 'crawlController@getImageJobCrawl')->name('homes');


// Route::get('/job_details/{id}', 'Backend\employerController@index')->name('job_details'); 

 Route::get('/job-details/{link}/{id}.html','Backend\jobController@jobDetails')->name('job_details');


 Route::get('/filter','filterController@filter')->name('filter');

  Route::get('/filters','filterController@filterHight')->name('filters');

Route::post('register-field', 'Backend\employerController@registerEmployer')->name('employer-register');


Route::group(['prefix' => 'ajax'], function() {

    Route::get('saveJob', 'ajaxController@getSaveJob')->name('getSaveJob'); 

    Route::get('apply-job', 'ajaxController@saveApply_job')->name('apply-job'); 

    Route::get('view-apply-job', 'ajaxController@getInfoDataCV')->name('view-apply-job'); 

    Route::get('getJobData-ajax','ajaxController@getJobData')->name('get-job-home');

});

Route::get('/co-hoi-nghe-nghiep', function () {

    return view('frontend.all_job');

})->name('all_job'); 

Route::get('employ-details/{link}', 'employerController@employDetails')->name('employ-details');




Route::get('/quick-register-user', function () {

    return view('frontend.regiter-fast-form');
    
})->name('regiter-fast-form'); 

Route::get('blog-details/{link}', 'blogController@viewBlog')->name('blog_detail'); 

Route::get('kien-thuc', function () {

    return view('frontend.listnews');

})->name('list-news');




Route::get('employers-login', function () {

    return view('frontend.employer_login');

})->name('employers_login_fe'); 

Route::get('employers-login', function () {

    return view('frontend.employer_login');

})->name('employers_login_fe'); 


Route::get('ve-chung-toi', function () {

    return view('frontend.our');

})->name('our');



Route::get('employers/register', 'Backend\employerController@index')->name('register_employer'); 


Route::group(['prefix' => 'employer','middleware' => 'Checkemploy'], function() {

    Route::post('update-pass-employer', 'employerController@updatePassEmployer')->name('update-pass-employer');

    
    Route::get('employers-info', 'Backend\employerController@info_employer')->name('employers_info');

    Route::post('update-active-job', 'Backend\employerController@activeJobEmployer')->name('update-active-job');

    Route::get('employers-info-list','Backend\employerInfoController@index')->name('employers-info-list');


    Route::get('/apply', 'Backend\employerController@user_apply')->name('user_apply'); 


    Route::post('updateEmployer', 'Backend\employerController@updateEmployer')->name('updateEmployer');


    Route::get('/index','Backend\employerController@viewIndex')->name('index_employer');  

    Route::get('/form', function () {
        return view('frontend.form_recruit');
    })->name('form_recruit'); 

    Route::get('/info', 'Backend\employerInfoController@getInfoEmployer')->name('info-employer'); 



    Route::get('logout', 'Backend\employerController@logout')->name('employer-logout');

});

Route::get('user/user-dashboard', 'userController@dashBoard')->middleware('checklogin')->name('user-dashboard');

Route::post('user', 'Backend\UserLoginController@registerUser')->name('register');

Route::post('user/login', 'Backend\UserLoginController@loginUser')->name('login-user');

Route::post('user/profice/{action}', 'Backend\applicationController@updateApplication')->name('postProfile');

Route::post('employer/login', 'Backend\employerController@postLoginEmployer')->name('loginEmployer');

Route::post('employer/postJob', 'Backend\employerController@postJob')->name('postJob');




   









