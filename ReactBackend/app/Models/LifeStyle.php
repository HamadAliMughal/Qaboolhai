<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LifeStyle extends Model
{
    use HasFactory;
    protected $table = 'lifestyle_table';
    protected $primaryKey = 'User_id ';
    protected $fillable = ['User_id','Martial_Status','Children','Siblings','Living_Status','Willing_to_move','Smoker','Religion','Wealth','Updated_at'];
}
