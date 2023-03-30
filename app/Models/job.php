<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class job extends Model
{
    public $table = 'job';
    public $fillable = [
        'title',
        'code',
        'detail',
        'requirements',
        'career',
        'address_job',
        'salary',
        'rights',
        'deadline',
        'employer_id',
        'link',
        'linkCrawl',
        'benefit',
        'type',
        
    ];
     
}
