<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

use Carbon\Carbon;

use DB;

class rateController extends Controller
{
    public function rate(Request $request)
    {
        $content = $request->content;

        $job = $request->job;

        $user_check = Auth::check();

        if(!empty($job) && $user_check){

            return view('rate');
        }

        return abort(404);
        
    }

    public function addRate(Request $request)
    {
        $content = strip_tags($request->content);

        $star_selected = $request->star_selected;

        $employer_id = $request->id_employer;

        $name =  Auth::user()->name;

        $email = Auth::user()->email;

        $active = 0;

        $now = Carbon::now();

        DB::table('rate')->insert(['name'=> $name, 'employer_id'=>$employer_id,  'email'=> $email, 'content'=>$content, 'star'=>$star_selected, 'active'=>0, 'created_at'=>$now, 'updated_at'=>$now]);

        return response('thành công');

                
    }

    public function test($value='')
    {
        // code...
    }
}
