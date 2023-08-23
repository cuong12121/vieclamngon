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


        $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->where('job.title','LIKE', '%'. $datas .'%')->OrWhere('employ_info.name', 'LIKE', '%' . $datas . '%')->OrWhere('job.title', 'LIKE', '%' . $datas . '%')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')->get();

       
        return view('frontend.filter', compact('job'));
    }


    public function seachTitleJob(Request $request)
    {
        $datas = trim($request->keyword);

        $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->where('job.title','LIKE', '%'. $datas .'%')->OrWhere('employ_info.name', 'LIKE', '%' . $datas . '%')->OrWhere('job.title', 'LIKE', '%' . $datas . '%')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')->get();

        return view('frontend.filter', compact('job'));
    }

    public function filterHight(Request $request)
    {
        $datas = trim($request->keyword)??'';

        $address = $request->location??'';

        $industry = $request->industry??'';


        if(empty($datas) && empty($address) && empty($industry)){

            $job = job::paginate(10);
        }

        $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')
        ->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')
        ->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')
        ->Where('job.title','LIKE', '%'. $datas .'%')
        ->Where('job.address_job', $address)
        ->Where('career',$industry)
        ->Orwhere('employ_info.name','LIKE', '%'. $datas .'%')
        ->Where('job.address_job', $address)
        ->Where('career',$industry)
        ->Orwhere('job.address_job', $address)->where('job.career', $industry)->get();

        if($job->count()===0){

            // Trường hợp không nhập address va industry
            if(empty($address)&& empty($industry)){

                $job = DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')
                ->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')
                ->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')
                ->Where('job.title','LIKE', '%'. $datas .'%')->get();
            }
            else{
                
                if(empty($datas)&& empty($industry) || empty($datas)&& empty($address)){

                    $job =   DB::table('employer_registers')->join('job', 'employer_registers.id', '=', 'job.employer_id')->join('employ_info', 'employer_registers.id', '=', 'employ_info.employ_id')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')->where('job.address_job', $address)->Orwhere('job.career', $industry)->get();

                }


            }

        }

        return view('frontend.filter', compact('job'));
    }
}
