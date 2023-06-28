<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profession extends Model
{
    use HasFactory;
    protected $table = 'profession_table';
    protected $primaryKey = 'User_id ';
    protected $fillable = ['User_id','Education','Profession','Aim','Updated_at'];
}
