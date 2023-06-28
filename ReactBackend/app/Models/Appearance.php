<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appearance extends Model
{
    use HasFactory;

    protected $table = 'appearance_table';
    protected $primaryKey = 'User_id ';
    protected $fillable = ['User_id','Eye_color','Hair_color','Height','BodyType','Updated_at'];
    
}
