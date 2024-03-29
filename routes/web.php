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

Route::get('/kien-thuc/{slug}', 'listnewController@viewListCate')->name('view-List-Cate');

Route::get('/kien-thuc', 'listnewController@viewList')->name('list-news');


// Route::get('/job_details/{id}', 'Backend\employerController@index')->name('job_details'); 

 Route::get('/job-details/{link}/{id}.html','Backend\jobController@jobDetails')->name('job_details');


Route::get('/filter','filterController@filter')->name('filter');

Route::get('/filters','filterController@filterHight')->name('filters');

Route::get('search-title-job', 'filterController@seachTitleJob')->name('search-title');

Route::post('register-field', 'Backend\employerController@registerEmployer')->name('employer-register');

Route::post('add-rate', 'rateController@addRate')->name('add-rate');

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

Route::get('employers-login', 'employerController@employesLogin')->name('employers_login_fe'); 

Route::get('ve-chung-toi', function () {

    return view('frontend.our');

})->name('our');


Route::get('rate', 'rateController@rate')->name('rate');

Route::get('nha-tuyen-dung/dang-ky', 'Backend\employerController@index')->name('register_employer'); 


Route::group(['prefix' => 'nha-tuyen-dung','middleware' => 'Checkemploy'], function() {

    Route::post('update-pass-employer', 'employerController@updatePassEmployer')->name('update-pass-employer');

    
    Route::get('employers-info', 'Backend\employerController@info_employer')->name('employers_info');


    Route::get('cv/{id}', 'Backend\adminController@viewCv')->name('viewCvEmployer');

    Route::get('ung-tuyen', 'employerController@viewCvApply')->name('cv-apply-employer');

    Route::post('show-viewer-job', 'Backend\employerController@showViewerJob')->name('show-viewer-job');

    Route::get('list-ung-vien', function () {

        return view('employer.list_ungvien');

    })->name('list-ung-vien');

    Route::post('update-active-job', 'Backend\employerController@activeJobEmployer')->name('update-active-job');

    Route::get('employers-info-list','Backend\employerInfoController@index')->name('employers-info-list');


    Route::get('/apply', 'Backend\employerController@user_apply')->name('user_apply'); 


    Route::post('updateEmployer', 'Backend\employerController@updateEmployer')->name('updateEmployer');


    Route::get('/dash-board','Backend\employerController@viewIndex')->name('index_employer');  

    Route::get('/form', function () {
        return view('employer.form');
    })->name('form_recruit'); 


    Route::get('/form/{id}', 'Backend\employerInfoController@show')->name('form_show_update'); 

    Route::get('/info', 'Backend\employerInfoController@getInfoEmployer')->name('info-employer'); 

    Route::get('logout', 'Backend\employerController@logout')->name('employer-logout');

    Route::post('employer-search-user', 'Backend\UserLoginController@SearchUserJob')->name('employer-search-user');

    Route::post('nha-tuyen-dung/postJob', 'Backend\employerController@postJob')->name('postJob');

    Route::post('update-job/{id}', 'Backend\employerController@updateJob')->name('update-job');

    Route::get('remove-job/{id}', 'Backend\employerController@removeJob')->name('remove-job');

});

Route::get('nha-tuyen-dung/index', 'Backend\employerController@showIndex')->name('show-index'); 

Route::get('ung-vien/user-dashboard', 'userController@dashBoard')->middleware('checklogin')->name('user-dashboard');

Route::post('users', 'Backend\UserLoginController@registerUser')->name('register');

Route::post('ung-vien/login', 'Backend\UserLoginController@loginUser')->name('login-user');

Route::post('send-mail-reset-pass', 'Backend\userController@resetPassWord')->name('send-mail-reset-pass');

Route::post('ung-vien/profice/{action}', 'Backend\applicationController@updateApplication')->name('postProfile');

Route::post('nha-tuyen-dung/login', 'Backend\employerController@postLoginEmployer')->name('loginEmployer');






   

