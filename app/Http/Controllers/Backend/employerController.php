<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\employer_register;
use App\Models\job; 
use Auth;
use Illuminate\Support\Facades\Validator;

use App\Models\employ_info;

class employerController extends Controller
{

    public function index()
    {
        if(!Auth::guard('employer_register')->check()){
            return view('frontend.employer-register');
        }
        else{


            return redirect(route('index_employer'));
        }  
    }

    public function user_apply(){
        return view('frontend.jops_apply');
    }

    public function viewIndex()
    {

        if(!Auth::guard('employer_register')->check()){
            return view('frontend.employer-register');
        }
        $id = Auth::guard('employer_register')->user()->id;
        $job = job::where('employer_id', $id)->get()->count();



        return view('frontend.index_employer', compact('job'));
    }

    public function logout()
    {
        Auth::guard('employer_register')->logout();
        
        return redirect(route('register_employer'));
    }
    public function registerEmployer(Request $request)
    {

        
         $messages = [
            'required' => 'Trường :attribute bắt buộc nhập.',
            'email'    => 'Trường :attribute phải có định dạng email',
            'unique'    => ':attribute đã tồn tại xin kiểm tra lại',
            ''
        ];
         $validator = Validator::make($request->all(), [
            'email' => 'required|unique:employer_registers',
            'password'=>'required',
           
        ], $messages);

      
        if ($validator->fails()) {


            return redirect()->back()->withErrors($validator);
        }
       

        $input = $request->all();
        $employer_register = new employer_register();

        if(!empty($input['password'])){

            $input['password'] = bcrypt($input['password']);

        }

        $employer_register->password = $input['password'];

        $employer_register->email = $request->email;

        $employer_register->name_company = $input['name_company'];

        $employer_register->office = $input['office'];

        $employer_register->phone_number = $input['phone_number'];

    
        $employer_register->save();


        $employ_info = new employ_info();

        $employ_info->employ_id = $employer_register['id'];

        $employ_info->save();


        return redirect()->back()->with('success', 'Bạn đã đăng ký thành công vui lòng đăng nhập'); 
      

    }

    public function postLoginEmployer(Request $request)
    {
        $arr = [
            'email' => $request->email,
            'password' => $request->password,
        ];


         if (Auth::guard('employer_register')->attempt($arr)) {

             return redirect(route('index_employer'));
      
            //..code tùy chọn
            //đăng nhập thành công thì hiển thị thông báo đăng nhập thành công
        } else {

            return redirect()->back()->with('success', 'tài khoản hoặc mặt khẩu chưa chính xác'); 
            //...code tùy chọn
            //đăng nhập thất bại hiển thị đăng nhập thất bại
        }
    }


    public function convertSlug($title)
    {
       
        $replacement = '-';
        $map = array();
        $quotedReplacement = preg_quote($replacement, '/');
        $default = array(
            '/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|å/' => 'a',
            '/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|ë/' => 'e',
            '/ì|í|ị|ỉ|ĩ|Ì|Í|Ị|Ỉ|Ĩ|î/' => 'i',
            '/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|ø/' => 'o',
            '/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|ů|û/' => 'u',
            '/ỳ|ý|ỵ|ỷ|ỹ|Ỳ|Ý|Ỵ|Ỷ|Ỹ/' => 'y',
            '/đ|Đ/' => 'd',
            '/ç/' => 'c',
            '/ñ/' => 'n',
            '/ä|æ/' => 'ae',
            '/ö/' => 'oe',
            '/ü/' => 'ue',
            '/Ä/' => 'Ae',
            '/Ü/' => 'Ue',
            '/Ö/' => 'Oe',
            '/ß/' => 'ss',
            '/[^\s\p{Ll}\p{Lm}\p{Lo}\p{Lt}\p{Lu}\p{Nd}]/mu' => ' ',
            '/\\s+/' => $replacement,
            sprintf('/^[%s]+|[%s]+$/', $quotedReplacement, $quotedReplacement) => '',
        );
        //Some URL was encode, decode first
        $title = urldecode($title);
        $map = array_merge($map, $default);
        return strtolower(preg_replace(array_keys($map), array_values($map), $title));


    }

    public function postJob(Request $request)
    {
        
        $input['title'] = $request->job_title;
        $input['code']  =  $request->job_code;
        $input['detail']  =  $request->job_desc;
        $input['requirements'] = $request->job_req;
        $input['career'] = [$request->INDUSTRY_ID][0][0]??'';
        $input['address_job'] = [$request->LOCATION_ID][0][0];
        $input['salary'] = $request->salary_from.' '.$request->job_salaryunit.'-'.$request->salary_to;
        $input['deadline'] = $request->JOB_LASTDATE; 
        $input['employer_id'] = Auth::guard('employer_register')->id();
        $input['link'] = $this->convertSlug($request->job_title);
        $job = new job();
        $job->create($input);

        return redirect(route('index_employer'));
       
    }

    public function updateEmployer(Request $request)
    {
        $employ_id = Auth::guard('employer_register')->user()->id;

        $id = employ_info::where('employ_id', $employ_id)->first();


        if(!empty($id)){

            $employ_info = employ_info::find($id->id);
            $employ_info->name = $request->EMP_NAME;
            $employ_info->totalstaff = $request->EMP_TOTALSTAFF;
            $employ_info->company_type  = $request->Company_type;
            $employ_info->website = $request->EMP_WEBSITE ;
            $employ_info->taxid = $request->EMP_TAXID;
            $employ_info->desc = $request->EMP_DESC;
            $employ_info->links = $this->convertSlug($employ_info->name);
            $employ_info->address = $request->address_employ ;
        

            if ($request->hasFile('logo')) {

                $file_upload = $request->file('logo');

                $name = time() . '_' . $file_upload->getClientOriginalName();

                $path = 'images/upload/logo';

                $request->file('logo')->move($path, $name, 'local');

                $filePath = $path. '/'.$name;

                $input['logo'] = $filePath;

                $employ_info->logo = $filePath;
            }

            $employ_info->save();

        }



        return redirect()->back();
        
    }

    public function info_employer()
    {
         if(!Auth::guard('employer_register')->check()){
            return view('frontend.employer-register');
        }
        else{

            $employ_id = Auth::guard('employer_register')->user()->id;

            $infoEmployer = Auth::guard('employer_register')->user();

            $id = employ_info::where('employ_id', $employ_id)->first();

            $data_employ = employ_info::find($id->id);

           return view('frontend.info_employer', compact('data_employ', 'infoEmployer'));
        }  
        
    }

    public function activeJobEmployer(Request $request)
    {
        $id = $request->id;

        $active = $request->active;

        $update = job::find($id);

        $update->active = $active;

        $update->save();

        return response('thanh cong');
    }
}
