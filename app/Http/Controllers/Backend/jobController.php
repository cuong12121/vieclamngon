<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\job;
use DB;

class jobController extends Controller
{
    public function jobDetails($link, $id)
    {

        $findID = job::findOrFail($id);

        $data =   DB::table('job')->join('employ_info', 'employ_info.employ_id', '=', 'job.employer_id')->where('job.id', $findID->id)->first(); 
        
        $meta =  $data->title;

        return view('frontend.job_details', compact('data', 'meta'));
    }
}
