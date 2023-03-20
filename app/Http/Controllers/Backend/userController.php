<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\application;

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
