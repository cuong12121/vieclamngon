<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\job;

use App\Models\apply_job;

use Auth; 

use Session;

use DB;

use Illuminate\Support\Facades\Cache;

class ajaxController extends Controller
{
    public function getSaveJob(Request $request){

        $data = json_decode($request->data);
        
        session(['saveJob' => count($data)]);

        $job = DB::table('job')->join('employ_info', 'job.employer_id','=', 'employ_info.employ_id')->whereIn('job.id', $data)->select('job.id', 'job.title', 'job.link','employ_info.logo', 'employ_info.name', 'employ_info.links')->get();


        return view('ajax.saveJob', compact('job')); 

    }

    public function saveApply_job(Request $request){


        $employ_id = $request->employ;
        $job_id  = $request->job;

        if(!Auth::check()){

            return response('chưa đăng nhập');
        }

        $Au_id = Auth::user()->id;
        
        $apply = new apply_job();
        $apply->employ_id = $employ_id;
        $apply->job_id = $job_id;
        $apply->user_id = $Au_id;
        $apply->save();

        return response('thanh cong');

    }
    public function getInfoDataCV(Request $request)
    {

        $id = $request->id;
        $data = apply_job::where('user_id', $id)->get();
        return view('ajax.job_apply', compact('data'));

    }

    public function getJobData(Request $request)
    {
        $page = $request->id;

        $job =  $job= DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->paginate(8,['*'], 'page', $page);

        return view('ajax.job_home', compact('job'));
       

    }

    
}
