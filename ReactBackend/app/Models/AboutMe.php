<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AboutMe extends Model
{
    use HasFactory;
    protected $table = 'aboutme_table';
    protected $primaryKey = 'User_id ';
    protected $fillable = ['User_id','Seeking','Hobbies','About','Updated_at'];
}
