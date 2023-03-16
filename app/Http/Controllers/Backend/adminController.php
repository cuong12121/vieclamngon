<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\admin;
use App\User;
use App\Models\job;
use App\Models\banners;

use App\Models\employ_info;

use App\Models\apply_job;
use DB;
use Auth;
use App\Models\application;
use Carbon\Carbon;

class adminController extends Controller
{
    public function login()
    {
         if(Auth::guard('admin')->check()){
            return view('admin.listUv');

        }
        return view('frontend.homes');
    }

    public function regiterView()
    {


            
        return view('admin.register');
    }

    public function banner()
    {
    
        return view('admin.banner');
    }

    public function Listboard()
    {
        return view('admin.listUv');
    }

     public function ListEmployer()
    {
        return view('admin.employer_list');
    }

    public function registerUser(Request $request)
    {
        $input = $request->All();

        $user = new admin();

        if(!empty($input['password'])){
           $input['password'] =  bcrypt($input['password']);
        }
        $user->name = $input['name'];
        $user->email = $input['email'];
        $user->password = $input['password'];


        $user->save();
       
        return redirect(route('admin login'))->with('success', 'Đăng ký thành công');

    }

    public function loginAdminUser(Request $request)
    {

        $email =  strip_tags(trim($request->emails), '@') ;

        $password = $request->passwords;

        $check  =   DB::table('admins')->where('email', $email)->first();

        if(!empty($check)){
            $data = [
                'email' => $email,
                'password' => $password,
            ];

            if (Auth::guard('admin')->attempt($data)) {

                return redirect(route('admin-view-Listboard'));
                   
            } else {
                
                return redirect()->back()->with('error', 'Đăng nhập thất bại xin kiểm tra mật khẩu');
            }

        }
        else{
            return redirect()->back()->with('error', 'Sai email hoặc sai mật khẩu, vui lòng kiểm tra lại');
        }

    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        
        return redirect(route('admin login'));
    }

    public function remove_user(Request $request)
    {
        $id = $request->id;
        $user = User::find($id);
        $user->delete();

    }

    public function viewCv($id)
    {
        $data_cv = application::findOrFail($id);

        $email = (User::find($id))->email;

        return view('user.cv', compact('data_cv','email'));
    }

    public function showJob(Request $request)
    {
        $id = $request->id;
        $job = job::where('employer_id', $id)->get();
        return view('ajax.job_employ', compact('job'));



    }

    public function showApplyJob(Request $request)
    {
        $id = $request->id;
        $job_id = job::where('employer_id', $id)->get()->pluck('id')->toArray();

        $apply_job = apply_job::whereIn('job_id', $job_id)->get();
        return view('ajax.job_employ', compact('apply_job'));



    }

    public function removeEmploy($id)
    {
        $employ = employ_info::findOrFail($id);
        $delete = $employ->delete();
        return redirect()->back();
    } 

    public function bannerviewedit($id)
    {
        $bannerId = banners::findOrFail($id);

        return view('admin.bannerEdit', compact('bannerId'));
    }  

    public function postEditBanner(Request $request, $id){

        $banner = banners::find($id);

        $input = $request->All();

        if ($request->hasFile('image')) {

            $file_upload = $request->file('image');

            $name = time() . '_' . $file_upload->getClientOriginalName();

            $path = 'images/upload/banner';

            $move = $request->file('image')->move($path, $name, 'public');

            
            $filePath = $path. '/'.$name;

            $input['image'] = $filePath;
        }   
      

        $banner->update($input);

        return redirect(route('admin-banner'));
    }

    public function listpost()
    {   

        $post = DB::table('posts1')->paginate(10);
        return view('admin.list-post', compact('post'));
    }

    public function indexPost()
    {
         return view('admin.create_post');
    }


    public function createSlug($str, $delimiter = '-'){
        $str  = $this->convert_vi_to_en($str); 
        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
        return $slug;

    } 


    public function convert_vi_to_en($str) {
          $str = preg_replace("/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
          $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
          $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
          $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
          $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
          $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
          $str = preg_replace("/(đ)/", 'd', $str);
          $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
          $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
          $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
          $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
          $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
          $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
          $str = preg_replace("/(Đ)/", 'D', $str);
          //$str = str_replace(" “, “-", str_replace(“&*#39;”,”",$str));
          return $str;
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $input['image'] = 'https://images.careerbuilder.vn/employer_folders/lot3/291743/67x67/103534logo_hongfa-003-4.png';

        if ($request->hasFile('image')) {

            $file_upload = $request->file('image');

            $name = time() . '_' . $file_upload->getClientOriginalName();

            $filePath = $file_upload->storeAs('uploads', $name, 'public');

            $input['image'] = $filePath;
        }
        $input['link'] = $this->createSlug($input['title']);

        
        $input['id_user'] = 1;

        $input['Meta_id'] = 1;

        $input['created_at'] = Carbon::now();

        $input['updated_at'] = Carbon::now();

        $input['date_post'] = Carbon::now();

        unset($input['_token']);


        $insert = DB::table('posts1')->insert($input);

        return redirect()->back();

    }

    public function edit(Request $request)
    {
        $id = $request->id;

        $data = DB::table('posts1')->where('id', $id)->get()->first();

        if(empty($data)){

            return abort('404');

        }

        return view('admin.create_post', compact('data'));
    }

    public function update(Request $request)
    {
        $id = $request->id;


        $input = $request->all();

        $input['image'] = 'https://images.careerbuilder.vn/employer_folders/lot3/291743/67x67/103534logo_hongfa-003-4.png';

        if ($request->hasFile('image')) {

            $file_upload = $request->file('image');

            $name = time() . '_' . $file_upload->getClientOriginalName();

            $filePath = $file_upload->storeAs('uploads', $name, 'public');

            $input['image'] = $filePath;
        }
        $input['link'] = $this->createSlug($input['title']);

        
        $input['id_user'] = 1;

        $input['Meta_id'] = 1;

       
        $input['updated_at'] = Carbon::now();

        $input['date_post'] = Carbon::now();

        unset($input['_token']);

        $update = DB::table('posts1')->update($input);

        return redirect()->back();

    }
}
