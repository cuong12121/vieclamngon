<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\application;

use Illuminate\Support\Facades\Cache;
use Mail;
use Session;
use DB;

class userController extends Controller
{
    public function register()
    {
       return view('user.registerClientUser');
    }

    public function dashBoard()
    {
        
        return view('user.user-dashboard');
    }

    public function myProFile()
    {
        return view('user.myprofile');
    }

    public function workSave()
    {
         return view('user.work-save');
    }

    public function workApply()
    {
         return view('user.work-apply');
    }

    public function notification()
    {
        return view('user.notification');
    }

    public function registerUser()
    {

        if(Auth::check()){

            return redirect(route('user-dashboard'));

        }
        else{
            return view('user.registerClientUser');
        }
        
    }

    public function employerView()
    {
        return view('user.employer_view');
    }

    public function viewCv($id)
    {
        $data_cv = application::findOrFail($id);

        return view('user.cv', compact('data_cv'));
    }

    public function upload_cv_pdf(Request $request)
    {

        $validatedData = $request->validate([
            'file' => 'required|max:4096|mimes:pdf,png'
            
        ]);
        
        $name = $request->file('file')->getClientOriginalName();

        $path = $request->file('file')->storeAs('user', $name, 'public');

        $id_user = Auth::user()->id;

        DB::table('users')->where('id', $id_user)->update(['cv'=>$path]);

        return redirect()->back();
    }

    public function viewLogin()
    {
        if(Auth::check()){

            return redirect(route('user-dashboard'));

        }
        else{
            return view('user.login_user');
        }
    }

    public function uploadAvatar(Request $request)
    {
        

        $validatedData = $request->validate([
            'upFile' => 'required|max:4096|mimes:jpg,png'
            
        ]);
        
        $name = $request->file('upFile')->getClientOriginalName();

        $id_user = Auth::user()->id;

        $name = $id_user.'_'.$name;

        $path = $request->file('upFile')->storeAs('logo-user', $name, 'public');

        DB::table('users')->where('id', $id_user)->update(['logo'=>$path]);

        return redirect()->back();


    }


    public function randomString($length = 12)
    {
         return substr(str_shuffle(str_repeat($x='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', ceil($length/strlen($x)) )),1,$length);
    }

    public function resetPassWord(Request $request)
    {
        $email = trim($request->emails);

        $check_email = DB::table('users')->where('email', $email)->first();

        $session = 'Email chưa chính xác xin kiểm tra lại';

        if(!empty($check_email)){

            $random = $this->randomString();

            Cache::forever($random, $check_email->id);

            Mail::send('sendemail', array('name'=>$check_email->name,'email'=>$check_email->email, 'random'=>$random), function($message) use($check_email){
                $message->to($check_email->email, 'AdminVieclamngon')->subject('Lấy lại mật khẩu đăng nhập');
            });

            $session = 'Vui lòng kiểm tra lại email để xác nhận đổi mật khẩu';

        }

        return redirect()->back()->with('alert',  $session);

    }

    public function showViewUpdatePassWord(Request $request)
    {
        $token =  $request->token;

        $cache_data = Cache::get($token);

        if(Cache::has($cache_data))
        {
            $data = Cache::get($cache_data);

            // xóa dữ liệu đã nhận từ cache

            Cache::forget($cache_data);

            return view('update_password', compact('data'));
        }

        return abort('404');
       
    }


    
     // Route::get('/my-profile', function () {
    //     return view('frontend.list-board');
    // })->name('my-profile');

    // Route::get('/work-save', function () {
    //     return view('frontend.work-save');
    // })->name('work-save');

    // Route::get('/work-apply', function () {
    //     return view('frontend.work-apply');
    // })->name('work-apply');

    // Route::get('/notification-user', function () {
    //     return view('frontend.notification');
    // })->name('notification-user');



}
