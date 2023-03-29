<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Models\job; 


class employerInfoController extends Controller
{
    public function index()
    {
        $id = Auth::guard('employer_register')->user()->id;
        $job = job::where('employer_id', $id)->orderBy('id','desc')->get();

        return view('employer.employers-info-list',compact('job'));
    }
    public function getInfoEmployer()
    {

        $infoEmployer = Auth::guard('employer_register')->user();
        return view('employer.employers-info-list.blade', compact('infoEmployer'));

    }

    public function show($id)
    {

        $employer_id = Auth::guard('employer_register')->user()->id;

        // check user de hien thi phan update job

        $checked = job::where('employer_id', $employer_id)->where('id', $id)->first();

        if(!empty($checked)){

            $data = job::find($id);

            return view('employer.form', compact('data'));
        }

        return abort('404');


    }
}
