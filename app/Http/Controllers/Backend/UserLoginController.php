<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\register;
use App\User;
use App\Models\application;
use DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class UserLoginController extends Controller
{
    public function registerUser(Request $request)
    {
        
        $request->session()->put('keys', 'register');

         $messages = [
            'required' => 'Trường :attribute bắt buộc nhập.',
            'email'    => 'Trường :attribute phải có định dạng email',
            'unique'   => ':attribute đã tồn tại xin kiểm tra lại',
        ];
         $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users',
            'surname'=>'required',
            'national'=>'required',
            'province'=>'required',
            'workplace'=>'required',
            'password'=>'required'


           
        ], $messages);

        if ($validator->fails()) {

            return redirect()->back()->withErrors($validator);
        }


        $input = $request->All();

        $user = new User();

        if(!empty($input['password'])){
           $input['password'] =  bcrypt($input['password']);
        }

        $user->surname = $input['surname'];
        $user->sex = $input['sex'];

        $user->national = $input['national'];
        $user->province = $input['province'];
        $user->workplace = $input['workplace'];


        $user->name = $input['name'];
        $user->jobs = $input['jobs'];
        $user->email = $input['email'];
        $user->password = $input['password'];

        $user->save();
        $application = new application();
        $application->users_id =  $user->id;
        $application->save();

        return redirect()->route('login-users')->with('success', 'Đăng ký thành công');

    }


    public function loginUser(Request $request)
    {
         
         $request->session()->put('keys', 'login');

       $email =  strip_tags(trim($request->emails), '@') ;

        $password = $request->passwords;

        $check  =   DB::table('users')->where('email', $email)->first();

        if(!empty($check)){

            $data = [
                'email' => $email,
                'password' => $password,
            ];

            if (Auth::attempt($data)) {

                if(!empty($request->index)){

                    return redirect()->back();

                }
                else{
                    return redirect(route('user-dashboard'));
                }

            } else {
                
                return redirect()->back()->with('error', 'Đăng nhập thất bại, xin kiểm tra lại mật khẩu');
            }

        }
        else{
            return redirect()->back()->with('error', 'Sai email hoặc sai mật khẩu, vui lòng kiểm tra lại');
        }
    }

    public function logoutUser()
    {
        Auth::logout();

        return redirect(route('home'));

    }

    public function SearchUserJob(Request $request)
    {
        $job    = $request->jobs;
        if(!empty($request->search)){
            $search =  trim(strip_tags($request->search));

            if($job==='0'){

                $data_search = DB::table('users')->join('application', 'users.id', '=', 'application.users_id')->select('users.id','users.surname', 'users.name', 'users.workplace', 'application.desired_salary','users.jobs')->where('users.workplace','like', "%{$search}%")->orWhere('users.name', 'like', "%{$search}%")->get();
            }
            else{
                $data_search = DB::table('users')->join('application', 'users.id', '=', 'application.users_id')->select('users.id','users.surname', 'users.name', 'users.workplace', 'application.desired_salary','users.jobs')->where('users.workplace','like', "%{$search}%")->where('users.jobs', $job)->orWhere('users.name', 'like', "%{$search}%")->where('users.jobs', $job)->get();

            }

        }
        else{

            if(empty($request->search) && empty($request->jobs)){

                $data_search = DB::table('users')->join('application', 'users.id', '=', 'application.users_id')->select('users.id','users.jobs','users.surname', 'users.name', 'users.workplace', 'application.desired_salary')->paginate(20);
            }
            else{
                $data_search = DB::table('users')->join('application', 'users.id', '=', 'application.users_id')->select('users.id','users.jobs','users.surname', 'users.name', 'users.workplace', 'application.desired_salary')->where('users.jobs', $job)->get();
            }

            
        }

        return view('employer.list_ungvien', compact('data_search'));

    
    }
}
