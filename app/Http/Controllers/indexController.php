<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

use DB;

class indexController extends Controller
{
    public function Home()
    {
        $meta = 'Trang chủ';
        $job= DB::table('job')->join('employ_info', 'job.employer_id', '=', 'employ_info.employ_id')->select('job.title', 'job.id', 'employ_info.name', 'employ_info.logo', 'employ_info.links', 'job.link', 'job.salary', 'job.address_job')->paginate(8);

        return view('frontend.index_list_job', compact('job', 'meta'));
    }
    
}
