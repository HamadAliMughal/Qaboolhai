<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;
    
    protected $table = 'registration';
    protected $primaryKey = 'User_id ';

    protected $fillable = ['First_Name','Last_Name','Email','Password','Username'];
}
