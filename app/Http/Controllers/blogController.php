<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\post;

class blogController extends Controller
{
    public function viewBlog($link)
    {
        $check = post::where('link', $link)->first();

        if(empty($check)){
            return abort('404');
        }
        $data =  $check::find($check->id);

        return view('frontend.blog_detail', compact('data'));
    }
}
