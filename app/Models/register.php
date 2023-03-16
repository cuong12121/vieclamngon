<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class register extends Model
{
    public $table = 'user';

    public $fillable = [
        'name',
        'email',
        'password'
        
    ];
    protected $casts = [
        'id' => 'integer',
        'name' => 'string',
        'email' => 'string',
        'password'=>'string'
    ];

    public static $rules = [
       
        'email' => 'required',
        
    ];
}
