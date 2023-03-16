<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\job;

use DB;


class filterController extends Controller
{
    public function filter(Request $request)
    {

        $datas = trim($request->keyword);

        $address = $request->address;

        $industry = $request->industry;

        
        $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->where('job.title','LIKE', '%'. $datas .'%')->OrWhere('employ_info.name', 'LIKE', '%' . $datas . '%')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')->get();
       



        return view('frontend.filter', compact('job'));
    }

    public function filterHight(Request $request)
    {
        $datas = trim($request->keyword);

        $address = $request->location;

        $industry = $request->industry;

        

        $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->where('job.title','LIKE', '%'. $datas .'%')->where('job.address_job', $address)->where('career', $industry)->OrWhere('employ_info.name', 'LIKE', '%' . $datas . '%')->where('job.address_job', $address)->where('career', $industry)->get();

        return view('frontend.filter', compact('job'));
    }
}
