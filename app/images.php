<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class images extends Model
{
    //
    protected $fillable = ["image_path", "image_description", "hash_id"];
}
