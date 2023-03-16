<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class employ_info extends Model
{
    public $table = 'employ_info';
    public $fillable = [
        'name',
        'totalstaff',
        'company_type',
        'website',
        'taxid',
        'desc',
        'address_employ',
        'employ_id',
        'logo'
    
    ];
}
