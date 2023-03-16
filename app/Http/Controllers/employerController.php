<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\employ_info;

use DB;

use Session;


use Auth;

class employerController extends Controller
{
    protected function employDetails($link)
    {
        $findID = employ_info::where('links', $link)->first();

        if(empty($findID)){
            return abort('404');
        }
        $id_employ = $findID->id;



        $data = DB::table('job')->join('employ_info', 'employ_info.employ_id', '=', 'job.employer_id')->where('employ_info.id', $id_employ)->select('job.id','job.title', 'job.salary', 'job.link', 'employ_info.name', 'employ_info.links')->get();
       

        return view('frontend.employ-detail-job', compact('data', 'findID'));
    }

    public function updatePassEmployer(Request $request)
    {

        $email   =  Auth::guard('employer_register')->user()->email;

        $id_user =   Auth::guard('employer_register')->user()->id;    

        $arr = [
            'email' => $email,
            'password' => $request->oldpass,
        ];


        if (Auth::guard('employer_register')->attempt($arr)) {

            $password =   trim(strip_tags($request->newpass));

            $employer  = DB::table('employer_registers')->where('id', $id_user)->update(['password'=>bcrypt($password)]);

            Session::flash('message_password', "Đổi mật khẩu thành công");

            return Redirect()->back();

        
        }
        else{

             Session::flash('message_password', "Mật khẩu cũ không đúng");

             return Redirect()->back();
        }
    

    }
}
