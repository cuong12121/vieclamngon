<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Auth;

use Carbon\Carbon;

use App\Models\job;

use DB;

class rateController extends Controller
{
    public function rate(Request $request)
    {
        $content = $request->content;

        $job_id = $request->job;

       
        $job = job::find($job_id);

        $now = Carbon::now();

        $user_check = Auth::check();


        $user_id = Auth::user()->id;


        if(!empty($job) && $user_check){

            $show_rate = DB::table('rate')->where('user_id', $user_id)->get();

            return view('rate', compact('job', 'show_rate', 'now'));
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

        $user_id  = Auth::user()->id;

        $active = 0;

        $now = Carbon::now();

        DB::table('rate')->insert(['name'=> $name, 'user_id'=>$user_id, 'employer_id'=>$employer_id,  'email'=> $email, 'content'=>$content, 'star'=>$star_selected, 'active'=>0, 'created_at'=>$now, 'updated_at'=>$now]);

        return response('thành công');

                
    }

    public function test($value='')
    {
        // code...
    }
}
