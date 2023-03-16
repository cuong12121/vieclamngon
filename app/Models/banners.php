<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class banners extends Model
{
    public $table = 'banners';

    public $fillable = [
        'title',
        'image',
        'slogan',
        'stt',
        'link',
    ];
}
