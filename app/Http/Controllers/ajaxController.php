<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\job;

use App\Models\apply_job;

use Auth; 

use DB;

class ajaxController extends Controller
{
    public function getSaveJob(Request $request){
        $data = json_decode($request->data);

        $job = DB::table('job')->join('employ_info', 'job.employer_id','=', 'employ_info.employ_id')->whereIn('job.id', $data)->select('job.id', 'job.title', 'job.link','employ_info.logo', 'employ_info.name', 'employ_info.links')->get();


        return view('ajax.saveJob', compact('job')); 

    }

    public function saveApply_job(Request $request){
        $job = $request->job;
        Auth::user()->id;

        $apply = new apply_job();
        $apply->job_id = $job;
        $apply->user_id = Auth::user()->id;
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
