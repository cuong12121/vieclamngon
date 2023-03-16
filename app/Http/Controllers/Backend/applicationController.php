<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\application;
use Illuminate\Support\Facades\Auth;

class applicationController extends Controller
{
    public function updateApplication(Request $request, $action)
    {
        $user_id = Auth::user()->id;
        $id = application::where('users_id', $user_id)->first();
        if(!empty($id)){
            $application = application::find($id->id);
            $data = $request->all();
            unset($data['_token']);

            if(!empty($application)){

                $application->$action = json_encode($data);
                $application->save();

            }

        }
      
        return redirect()->back();
       
    }


}
