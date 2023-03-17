<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

use App\Models\post;



class listnewController extends Controller
{
    public function viewListCate(Request $request)
    {
        
        $slug = trim($request->slug);

        $ar_check  = ['ki-nang-cong-so', 'chuyen-nganh', 'chuyen-cong-so'];

        if(in_array($slug, $ar_check)){

            $index_search  = array_search($slug, $ar_check)+1;

            $post = DB::table('posts1')->where('category', $index_search)->paginate(10);

             return view('frontend.listnews', compact('post'));



        }
        else{
            return abort('404');
        }

    }

    public function viewList()
    {

        $post = post::paginate(10); 
        return view('frontend.listnews', compact('post'));
    }
}
